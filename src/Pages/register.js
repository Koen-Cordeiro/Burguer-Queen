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
  return (<form className={css(styles.flexCenter)}>
    {arrText.map((e, index) => <Input key={index} type={e.type} text={e.text} />)}
    <button className={css(styles.red)}>Registre-se</button>
  </form>)
}
const styles = StyleSheet.create({
  flexCenter: {
    display: "flex",
    flexDirection: "column"
  },
  red: {
    backgroundColor: 'red'
  },
});

export default Register
