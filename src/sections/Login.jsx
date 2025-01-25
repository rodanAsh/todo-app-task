import { Button, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mode = useSelector((state) => state.theme.mode);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  function validateEmail() {
    if (!loginData.email) {
      setEmailError("Email required to login");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

  function validatePassword() {
    if (!loginData.password) {
      setPasswordError("Password required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      console.log("login successful");
      dispatch(login("dummyToken"));
      navigate("/home");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <form
        className={`bg-white ${
          mode === "light" ? "bg-[#181818]" : ""
        }  p-4 rounded-md flex flex-col max-w-[360px] md:min-w-[500px]`}
        onSubmit={handleSubmit}
      >
        <label
          className={`${
            mode === "dark" ? "text-black" : ""
          } text-white font-semibold`}
        >
          Email
        </label>
        <Typography color="error">{emailError}</Typography>
        <input
          name="email"
          type="email"
          value={loginData.email}
          onChange={handleChange}
          className={`${
            mode === "dark" ? "border-[1px] border-black" : ""
          } px-4 py-2 rounded-md outline-green-500`}
        />
        <br />
        <label
          className={`${
            mode === "dark" ? "text-black" : ""
          } text-white font-semibold`}
        >
          Password
        </label>
        <Typography color="error">{passwordError}</Typography>
        <input
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
          className={`${
            mode === "dark" ? "border-[1px] border-black" : ""
          } px-4 py-2 rounded-md outline-green-500`}
        />
        <br />
        <Button
          type="submit"
          sx={{ width: "fit-content", mx: "auto", color: "#FFFFFF" }}
          className="mx-auto"
          variant="contained"
          color="success"
        >
          Login
        </Button>
      </form>
    </section>
  );
};

export default Login;
