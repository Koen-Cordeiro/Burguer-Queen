import React, { useState } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import { errorsRegister } from './errorsRegister'
import Input from '../../Components/input'
import Button from '../../Components/button/button'

const Register = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = (document) => {
    const userCollection = firebase.firestore().collection('users-info');
    firebase
      .auth()
      .createUserWithEmailAndPassword(document.email, document.password)
      .then((cred) => {
        cred.user.updateProfile({ displayName: document.name });
      })
      .then(() => {
        const uid = firebase.auth().currentUser.uid;
        userCollection.doc(uid).set(document);
      })
      .catch((error) => {
        let errorCode = error.code;
        setError(errorsRegister[errorCode]);
      });
  }

  const arrText = [
    { text: "Nome", type: "text", value: name, placeholder:"Seu nome de detetive", handleChange: (e) => setName(e.currentTarget.value) },
    { text: "E-mail", type: "email", value: email, placeholder:"detetive@exemplo.com.br", handleChange: (e) => setEmail(e.currentTarget.value) },
    { text: "Senha", type: "password", value: password, placeholder:"Cifra de até 6 caracteres", handleChange: (e) => setPassword(e.currentTarget.value) },
    { text: "Confirme sua senha", type: "password", value: confirmPassword, handleChange: (e) => setConfirmPassword(e.currentTarget.value) },
  ]
  return (
    <section className='log-reg-flex reg-background'>
      <form className='log-reg-column log-reg-center'>
        {arrText.map((e, index) => <Input key={index} componentClass='log-reg-column log-reg-space-after log-reg-input' value={e.value} handleChange={e.handleChange} type={e.type} text={e.text} placeholder={e.placeholder} />)}
        <label className='reg-work-label log-reg-space-after'>Área de trabalho
          <div onChange={event => setWorkPlace(event.target.value)} className='log-reg-center reg-row reg-radio-input-div'>
            <Input type='radio' value={'saloon'} name={'radio'} textRadio={'Salão'} />
            <p>ou</p>
            <Input type='radio' value={'kitchen'} name={'radio'} textRadio={'Cozinha'} />
          </div>
        </label>
        {error && <span className='alert'>{error}</span>}
        <Button buttonClass=' log-reg-space-after grow' type='submit' text='ENVIAR' handleClick={(e) => {
          e.preventDefault()
          password === confirmPassword ? register({ name, email, password, workPlace }) : setError('Senhas não conferem')
        }}/>
      </form>
      <div className='log-base-div'>
      <p className='log-reg-inherit-align log-reg-base-p'>Já possui uma conta?{"\u00a0"}<Link to='/'>Entrar</Link></p>
      </div>
    </section>
  )
}


export default Register
