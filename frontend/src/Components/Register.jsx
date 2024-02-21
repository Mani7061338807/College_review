import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const submitDeatils = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/signup", {
      name,
      email,
      password,
    });
    if (res.status === 200) {
      navigate("/login");
    }
    console.log(res);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-16 w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-[Roboto] text-3xl font-bold">Sign up</h1>
        <p className="font-[Roboto] mt-6 text-sm text-gray-500">
          Create your account
        </p>
      </div>
      <div className="flex">
        <form action="" className="font-[Roboto] text-black">
          <label
            htmlFor="name"
            className="flex items-center w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-6"
          >
            <PersonIcon className="text-gray-400 ml-2" fontSize="small" />
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="bg-transparent outline-none ml-2"
              onChange={(e) => handleChangeName(e)}
            />
          </label>

          <label
            htmlFor="email"
            className="flex items-center w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-4"
          >
            <EmailIcon className="text-gray-400 ml-2" fontSize="small" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              className="bg-transparent outline-none ml-2"
              onChange={(e) => handleChangeEmail(e)}
            />
          </label>

          <label
            htmlFor="password"
            className="flex items-center w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-4"
          >
            <PasswordIcon className="text-gray-400 ml-2" fontSize="small" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="bg-transparent outline-none ml-2"
              onChange={(e) => handleChangePassword(e)}
            />
          </label>

          <label
            htmlFor="confirmpassword"
            className="flex items-center w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-4"
          >
            <PasswordIcon className="text-gray-400 ml-2" fontSize="small" />
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm Password"
              required
              className="bg-transparent outline-none ml-2"
              onChange={(e) => handleChangePassword(e)}
            />
          </label>

          <button
            className="before:ease relative flex mt-6 items-center justify-center w-[250px] h-[50px] overflow-hidden rounded-[30px] bg-[#9c28b1] font-[Roboto] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#9c28b1] hover:before:-translate-x-80"
            onClick={submitDeatils}
          >
            Sign up
          </button>

          <h3 className="text-gray-400 flex justify-center items-center mt-6">
            Or
          </h3>

          <button
            className="before:ease relative flex mt-6 items-center justify-center w-[250px] h-[50px] overflow-hidden border-2 border-[#9c28b1] rounded-[30px] font-[Roboto] text-[#9c28b1] shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#9c28b1] before:opacity-10 before:duration-700 hover:shadow-[#9c28b1] hover:before:-translate-x-80"
            onClick={submitDeatils}
          >
            Sign In with Google
          </button>

          <div className="flex justify-center items-center font-[Roboto] text-sm font-medium mt-12">
            <p>Already have an account?</p>
            <Link to="/login" className="text-[#9c28b1] ml-2">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
