import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className='flex flex-col justify-center items-center mt-24 w-full overflow-hidden'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-[Roboto] text-3xl font-bold'>Welcome Back</h1>
          <p className='font-[Roboto] mt-6 text-sm text-gray-500'>Enter your credential to login</p>   
        </div>
        <div className='flex'>
          <form action="" className='font-[Roboto] text-black'>

              <label htmlFor="name" className='flex items-center w-[250px] h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-6'>
              <PersonIcon className='text-gray-400 ml-2' fontSize='small'/>
              <input type="text" id='name' placeholder='Name' className='bg-transparent outline-none ml-2'/>
              </label>

              <label htmlFor="password" className='flex items-center w-[250px]  h-[45px] border-2 rounded-lg bg-[#f0e4f2] mt-4'>
              <PasswordIcon className='text-gray-400 ml-2' fontSize='small'/>
              <input type="password" id='password' placeholder='Password'required className='bg-transparent outline-none ml-2'/>
              </label>

              <button className='before:ease relative flex mt-6 items-center justify-center w-[250px] h-[50px] overflow-hidden rounded-[30px] bg-[#9c28b1] font-[Roboto] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#9c28b1] hover:before:-translate-x-80'>
                Login
              </button>

              <Link to="/forgotpassword" className='text-[#9c28b1] font-medium flex justify-center items-center mt-24'>Forgot password?</Link>
              
              <div className='flex justify-center items-center font-[Roboto] text-sm font-medium mt-24'>
              <p>Don't have an account?</p>
              <Link to="/signup" className='text-[#9c28b1] ml-2'>Sign Up</Link>
            </div>
          
          </form>
        </div>
    </div>
  )
}

export default Login