import { Button, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginData,setLoginData] = useState({
        email:"",
        password:""
    })
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginData(prev => ({...prev,[name]:value}))
    }

    function validateEmail() {
        if(!loginData.email) {
            setEmailError("Email required to login")
            return false;
        } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
            setEmailError("Invalid email format")
            return false;
        } else {
            setEmailError("")
            return true;
        }
    }

    function validatePassword() {
        if(!loginData.password) {
            setPasswordError("Password required")
            return false;
        } else {
            setPasswordError("")
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(validateEmail() && validatePassword()) {
            console.log("login successful");
            dispatch(login('dummyToken'))
            navigate('/home')
        }
    }

  return (
    <section className='h-screen flex items-center justify-center'>
            <form 
                className='bg-white p-4 rounded-md flex flex-col max-w-[360px] md:min-w-[500px]'
                onSubmit={handleSubmit}
            >
                <InputLabel>Email</InputLabel>
                <Typography color='error'>{emailError}</Typography>
                <TextField
                    name="email"
                    type='email'
                    color='success'
                    value={loginData.email}
                    onChange={handleChange}
                />
                <br />
                <InputLabel>Password</InputLabel>
                <Typography color='error'>{passwordError}</Typography>
                <TextField 
                    name="password"
                    type='password'
                    color='success'
                    value={loginData.password}
                    onChange={handleChange}
                />
                <br />
                <Button type='submit' sx={{width:'fit-content',mx:'auto'}} className='mx-auto' variant='contained' color='success'>Login</Button>
            </form>  
    </section>
  )
}

export default Login