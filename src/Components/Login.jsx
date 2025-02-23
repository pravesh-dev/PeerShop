import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUserName } from "../Stores/user";

function Login() {
  const loginStatus = useSelector(store => store.user.loginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoginMsg, setIsLoginMsg] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [hoverLink, setHoverLink] = useState(false);
  const [formError, setFormError] = useState('')
  const [name, setName] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    return emailRegex.test(email);
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

    if (!validateEmail(formData.email)) {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 2000);
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

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (response.ok) {
        let data = await response.json();
        setFormData({ email: '', password: '' });
        setName(data.user.name);
        setIsLoginMsg(true);
        setTimeout(() => {
          setIsLoginMsg(false);
          dispatch(addUserName({ userName: data.user.name, userEmail: data.user.email, userContact: data.user.contact, userGender: data.user.gender }));
          localStorage.setItem("token", data.user.token);
          navigate('/');
        }, 2000);
      } else if (response.status === 500) {
        setServerError(true);
        setTimeout(() => {
          setServerError(false);
        }, 2000);
      } else {
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center background_design">
      <div className="bg-[#0000004b] w-80 h-[30rem] mx-1  flex gap-5 flex-col items-center justify-center border border-white/20 rounded-sm md:w-[30rem] lg:mt-14 relative overflow-hidden">
        <h2 className={`bg-black/80 text-green-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${isLoginMsg ? 'top-0' : '-top-14'}`}>You are logged in as <span className=" capitalize font-krona">{name}</span>.</h2>
        <h2 className={`bg-black/80 text-red-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${loginError ? 'top-0' : '-top-14'}`}>Invalid email or password.</h2>
        <h2 className={`bg-black/80 text-red-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${formError ? 'top-0' : '-top-14'}`}>{formError}</h2>
        <h2 className={`bg-black/80 text-red-600 text-sm px-3 py-1 rounded-md lg:px-5 lg:py-2 absolute duration-300 ${serverError ? 'top-0' : '-top-14'}`}>Something went wrong! Please try again later.</h2>
        <h1 className="text-2xl font-krona lg:mb-5">LOGIN</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center px-2 gap-3 md:px-10"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            className="form_input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            autoComplete="off"
            className="form_input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="flex items-center justify-center gap-2 border bg-white text-black font-bold w-full h-10 mt-3 rounded-md duration-300 hover:bg-transparent hover:text-white">
            Login{" "}
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </form>
        <p className="text-sm tracking-widest">
          Don't have an account?{" "}
          <Link
            to="/signUp"
            className="text-[#7B4CFF] tracking-normal font-bold relative"
            onMouseOver={() => {
              setHoverLink(true);
            }}
            onMouseLeave={() => {
              setHoverLink(false);
            }}
          >
            <span
              className={`absolute left-0 bottom-0 h-[0.08rem] bg-[#7B4CFF] duration-300 ${
                hoverLink ? "w-full" : "w-0"
              }`}
            ></span>
            Create New
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
