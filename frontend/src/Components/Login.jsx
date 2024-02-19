import React from 'react'

const Login = () => {

  return (
    <div className=''>
        <form action="">
            <label htmlFor="email">
            email
            <input type="email" id='email'/>
            </label>
            <label htmlFor="password" >
            password
            <input type="password" id='password'/>
            </label>
        </form>
    </div>
  )
}

export default Login