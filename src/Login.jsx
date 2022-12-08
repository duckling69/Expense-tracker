import React, { useState } from 'react'
import Logo from "./assets/3644996 1.svg"
import { Checkbox, TextField } from '@mui/material'

function Login() {
    const [data, setData] = useState({});
    const handleinput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput });
    }
    const [message, setMessage] = useState("Register now");
    function random() {
        if (message == "Register now") {
            setMessage("xxxxxx");
        } else {
            setMessage("Register now")
        }

    }
    return (
        <div>
            <div className=' flex flex-row'>
                <img className='md:w-[60vw] h-[100vh] hidden md:block' src={Logo} alt="React Logo" />
                <div className=' flex flex-col pt-[17vh] mx-auto w-[30vw] font-mono '>
                    <h1 className='text-3xl'>Sign in</h1>
                    <p className='pt-2'>If you don’t have an account register</p>
                    <p>You can <span className=' text-orange-500'><a onClick={random} src='#' className=' cursor-pointer hover:underline'>{message}</a></span> </p>
                    <p className=' text-[13px] font-bold pt-[2vh]'>Email</p>
                    <TextField
                        id="filled-password-input"
                        label="Email"
                        type="Email"
                        autoComplete="current-password"
                        variant="filled"
                        className=' max-w-[20vw]  py-[1vh]'
                        onChange={(event) => handleinput(event)}

                    />                     <p className=' text-[13px] font-bold pt-[3vh]'>Password</p>
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        className=' max-w-[20vw]  py-[1vh]'
                        onChange={(event) => handleinput(event)}

                    />
                    <div className='pt-[1vh] max-w-[20vw]'>
                        <div className='flex flex-row float-left  '>
                            <Checkbox size="small" className='' />
                            <p className=' text-[12px] my-auto'>Remember me</p>
                        </div>
                        <div className='float-right my-auto pt-[5px]'>
                            <a href='#' className='my-auto text-[12px] h-[40px] cursor-pointer hover:underline'>Forgot password?</a>
                        </div>
                    </div>
                    <button className='duration-200 max-w-[20vw] mt-[5vh] h-[5vh] hover:duration-500 hover:-translate-y-1 bg-orange-500 drop-shadow-xl hover:bg-orange-400 text-white rounded-2xl'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login