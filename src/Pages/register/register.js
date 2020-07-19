import React, {useState} from 'react'
import Input from '../../Components/input'
import './styleRegister.css'


const Register = () => {
  const [name, setName] = useState('');

  const arrText = [
    { text: "Digite seu nome", type: "text", value: name, handleChange: (e)=> setName(e.currentTarget.value) },
    { text: "Digite seu e-mail", type: "email" },
    { text: "Digite sua senha", type: "password" },
    { text: "Confirme sua senha", type: "password" },
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
      console.log(name)
      }}>Registre-se</button>
  </form>
  </section>
  <section> Lateral</section>
  </main>
  )
}


export default Register
