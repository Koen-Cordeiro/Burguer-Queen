import React, {useState, useEffect} from 'react'
import Input from './input/input'

const Form = (props) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  return (
    <form className='log-reg-column log-reg-center'>
      <Input key={index} use='sign' specific='data' value={e.value} handleChange={e.handleChange} type={e.type} text={e.text} placeholder={e.placeholder} />
      {register && < RadioInputArea setValue={setWorkPlace} />}
      {error && <span className='alert'>{error}</span>}
      <Button type='submit' text='ENVIAR' handleClick={(e) => {
        e.preventDefault()
        password === confirmPassword ? props.register({ name, email, password, workPlace }) : setError('Senhas não conferem')
      }} />
    </form>
  )
}

export default Form