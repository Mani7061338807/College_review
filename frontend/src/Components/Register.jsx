import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
   const handleChangeName = (e) => {
     setName(e.target.value);
     
   }
   const handleChangeEmail = (e) => {
     setEmail(e.target.value);

   }
   const handleChangePassword = (e) => {
    
     setPassword(e.target.value);
     
   }
   const submitDeatils = async(e) => {
    e.preventDefault();
     const res = await axios.post('http://localhost:3001/signup',{
        name,
        email,
        password
     });
     if(res.status === 200){
        navigate('/login')
     }
     console.log(res);
   }
  return (

    <div>
        <form action="">
            <label htmlFor="name">
            <input type="text" id='name' placeholder='Name' onChange={(e)=>handleChangeName(e)}/>
            </label>
            <label htmlFor="email">
            email
            <input type="email" id='email' placeholder='email' onChange={(e)=>handleChangeEmail(e)}/>
            </label>
            <label htmlFor="password">
            password
            <input type="password" id='password' placeholder='password' onChange={(e)=>handleChangePassword(e)}/>
            </label>

            <button onClick={submitDeatils}>submit</button>
        </form>
    </div>
  )
}

export default Register