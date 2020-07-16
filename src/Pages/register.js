import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => (
    <form>
    <input type='text'/>
    <input type='email'/>
    <input type='password'/>
    <input type='password'/>
    <Link to='/' exact={true}><button>Registre-se</button></Link> 
    </form>
)

export default Register