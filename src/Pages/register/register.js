import React, {useState} from 'react'
import Input from '../../Components/input'
import './styleRegister.css'


const Register = () => {
  const [name, setName] = useState([]);

  const arrText = [
    { text: "Digite seu nome", type: "text", value: name, handleClick: ()=> {} },
    { text: "Digite seu e-mail", type: "email" },
    { text: "Digite sua senha", type: "password" },
    { text: "Confirme sua senha", type: "password" },
  ]
  return (
    <main className='flex-center'> 
  <section className='flex-column'>
    <h2 className='text-center'>Criar uma nova conta</h2>
    <div className='h-rule'/>
    <form className='flex-column'>
    {arrText.map((e, index) => <Input key={index}type={e.type} text={e.text} />)}
    <button className='button'>Registre-se</button>
  </form>
  </section>
  <section> Lateral</section>
  </main>
  )
}


export default Register
