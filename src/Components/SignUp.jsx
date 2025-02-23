import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "../Stores/user";

function SignUp() {
  const loginStatus = useSelector(store => store.user.loginStatus);

  const [hoverLink, setHoverLink] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: '',
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (loginStatus) {
      navigate("/");
    }
  }, [loginStatus, navigate]);
  
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

  const validateContact = (contact) => {
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(contact)) {
      return 'Contact number must be exactly 10 digits.';
    }
    return null;
  };

  const validatePassword = (password) => {
    const lengthRegex = /^.{8,18}$/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!lengthRegex.test(password)) {
      return 'Password must be 8-18 characters long.';
    }
    if (!upperCaseRegex.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!lowerCaseRegex.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!numberRegex.test(password)) {
      return 'Password must contain at least one number.';
    }
    if (!specialCharRegex.test(password)) {
      return 'Password must contain at least one special character.';
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

    const contactError = validateContact(formData.contact);
    if (contactError) {
      setFormError(contactError);
      setTimeout(() => {
        setFormError('');
      }, 3000);
      return;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setFormError(passwordError);
      setTimeout(() => {
        setFormError('');
      }, 3000);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match.');
      setTimeout(() => {
        setFormError('');
      }, 3000);
      return;
    }

    try {
      let response = await fetch('http://localhost:3000/user/userCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });
      if (response.ok) {
        let data = await response.json();
        setFormData({ name: '', email: '', contact: '', password: '', confirmPassword: '' });
        setSubmitted(true);
        localStorage.setItem("token", data.user.token);
        setTimeout(() => {
          setSubmitted(false);
          dispatch(addUserName({ userName: data.user.name, userEmail: data.user.email, userContact: data.user.contact }));
          navigate('/');
        }, 2000);
      } else if (response.status === 409) {
        setFormError('Already registered with this email.');
        setTimeout(() => {
          setFormError('');
          navigate('/login');
        }, 2000);
      } else {
        console.log('Error occurs while submitting form');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center background_design">
      <div className="bg-[#0000004b] w-80 h-[30rem] mx-1 flex gap-5 flex-col items-center justify-center border border-white/20 rounded-sm md:w-[30rem] lg:mt-14 lg:w-[27rem] lg:h-[33rem] relative overflow-hidden">
        <h2 className={`bg-black/80 text-green-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${submitted ? 'top-0' : '-top-14'}`}>Form submitted successfully.</h2>
        <h2 className={`bg-black/80 text-red-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${formError ? 'top-0' : '-top-14'}`}>{formError}</h2>
        <h1 className="text-2xl font-krona lg:mb-5">SIGN UP</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center px-2 gap-3 md:px-10"
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
          <input
            type="tel"
            name="contact"
            placeholder="Enter your contact no."
            autoComplete="off"
            className="form_input"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create password"
            className="form_input"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="form_input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button className="flex items-center justify-center gap-2 border bg-white text-black font-bold w-full h-10 mt-3 rounded-md duration-300 hover:bg-transparent hover:text-white">
            Sign up{" "}
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </form>
        <p className="text-sm tracking-widest">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#7B4CFF] tracking-normal font-bold relative"
            onMouseOver={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
          >
            <span
              className={`absolute left-0 bottom-0 h-[0.08rem] bg-[#7B4CFF] duration-300 ${hoverLink ? "w-full" : "w-0"}`}
            ></span>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
