import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => (
    <>
    <input type='email'/>
    <input type='password'/>
    <Link to='/register'><button>Login</button></Link> 
    </>
)

export default Login