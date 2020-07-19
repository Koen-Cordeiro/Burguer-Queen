import React, {useState} from 'react'
import Input from '../../Components/input'
import './styleRegister.css'


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const arrText = [
    { text: "Digite seu nome", type: "text", value: name, handleChange: (e)=> setName(e.currentTarget.value) },
    { text: "Digite seu e-mail", type: "email", value: email, handleChange: (e)=> setEmail(e.currentTarget.value) },
    { text: "Digite sua senha", type: "password", value: password, handleChange: (e)=> setPassword(e.currentTarget.value) },
    { text: "Confirme sua senha", type: "password", value: confirmPassword, handleChange: (e)=> setConfirmPassword(e.currentTarget.value) },
  ]
  return (
    <main className='flex-center'> 
  <section className='flex-column'>
    <h2 className='text-center'>Criar uma nova conta</h2>
    <div className='h-rule'/>
    <form className='flex-column center'>
    {arrText.map((e, index) => <Input key={index} value={e.value} handleChange={e.handleChange} inputClass={'input-style'} type={e.type} text={e.text} />)}
    <button className='button' type='submit' onClick={(e) => {
      e.preventDefault()
      console.log(confirmPassword)
      }}>Registre-se</button>
  </form>
  </section>
  <section> Lateral</section>
  </main>
  )
}


export default Register
