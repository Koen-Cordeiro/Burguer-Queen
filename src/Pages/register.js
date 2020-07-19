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
    <h2 className={css(styles.textCenter)}>Criar uma nova conta</h2>
    <div className={css(styles.hRule)}/>
    <form className={css(styles.flexColumn)}>
    {arrText.map((e, index) => <Input key={index} inputClass={css(styles.input)} type={e.type} text={e.text} />)}
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
  textCenter: {
    textAlign: 'center'
  },
  input: {
    margin: '5px 0 20px',
    height: '25px'
  },
  hRule: {
    height:'2px',
    width: '400px',
    backgroundColor:'black',
    alignSelf: 'center'
  },
  button: {
    height: '20px',
    width: '25px'
  },
});

export default Register
