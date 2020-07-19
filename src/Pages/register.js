import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import Input from '../Components/input'


const Register = () => {

  const arrText = [
    { text: "Digite seu nome", type: "text" },
    { text: "Digite seu e-mail", type: "email" },
    { text: "Digite sua senha", type: "password" },
    { text: "Confirme sua senha", type: "password" },
  ]
  return (
    <main className={css(styles.flexCenter)}> 
  <section className={css(styles.flexColumn)}>
    <h2>Criar uma nova conta</h2>
    <div className={css(styles.hRule)}/>
    <form className={css(styles.flexColumn)}>
    {arrText.map((e, index) => <Input key={index} type={e.type} text={e.text} />)}
    <button className={css(styles.button)}>Registre-se</button>
  </form>
  </section>
  <section> Lateral</section>
  </main>
  )
}
const styles = StyleSheet.create({
  flexCenter: {
    display: "flex",
    justifyContent: 'space-around',
    height: '97vh',
    alignItems: 'center'
  },
  flexColumn: {
    display: "flex",
    flexDirection: 'column'
  },
  button: {
    height: '20px',
    width: '25px'
  },
});

export default Register
