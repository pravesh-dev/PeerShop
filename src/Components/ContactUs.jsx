import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^(?!.*\.{2})(?!.*\.\@)(?!.*@\.)([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format.';
    }
    return null;
  };

  const validateName = (name) => {
    const lengthRegex = /^.{4,18}$/;
    const charRegex = /^[a-zA-Z\s]+$/;
    if (!lengthRegex.test(name)) {
      return 'Name should be 4-18 characters long.';
    }
    if (!charRegex.test(name)) {
      return 'Name cannot contain numbers or special characters.';
    }
    return null;
  };

  const validateMessage = (message) => {
    const lengthRegex = /^.{1,}$/;
    const invalidCharRegex = /[^a-zA-Z0-9\s.?!]/;
    if (!lengthRegex.test(message)) {
      return 'Message cannot be empty.';
    }
    if (invalidCharRegex.test(message)) {
      return 'Message can contain only letters, numbers, spaces, dots, and question marks.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    if (nameError) {
      setFormError(nameError);
      setTimeout(() => {
        setFormError('');
      }, 3000);
      return;
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      setFormError(emailError);
      setTimeout(() => {
        setFormError('');
      }, 3000);
      return;
    }

    const messageError = validateMessage(formData.message);
    if (messageError) {
      setFormError(messageError);
      setTimeout(() => {
        setFormError('');
      }, 3000);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/message/userMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        console.log('Error sending message');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center background_design2">
      <div className="bg-[#0000004b] w-80 h-[27rem] mx-1 mt-8 flex gap-5 flex-col items-center justify-center border border-white/20 rounded-sm md:w-[30rem] lg:mt-14 lg:w-[27rem] lg:h-[30rem] relative overflow-hidden">
        <h2 className={`bg-black/80 text-green-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${submitted ? 'top-0' : '-top-14'}`}>Your message has been sent successfully.</h2>
        <h2 className={`bg-black/80 text-red-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${formError ? 'top-0' : '-top-14'}`}>{formError}</h2>
        <h1 className="text-2xl font-krona mb-5 lg:mb-8">CONTACT US</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center px-2 gap-3 md:px-10 lg:gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            className="form_input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            className="form_input"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="bg-[#26262648] outline-none border border-white/25 rounded-sm pl-2 text-sm h-28 w-full resize-none"
            name="message"
            placeholder="Message here"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className="flex items-center justify-center gap-2 bg-slate-500 text-black font-bold w-full h-10 mt-3 rounded-md duration-300 hover:bg-slate-700 hover:text-white">
            Send Message{" "}
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
