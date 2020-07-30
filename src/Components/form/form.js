import React, {useState, useEffect} from 'react'
import Input from '../input/input'

const Form = (props) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [field, setField] = useState('');

  if (window.location.pathname ==='/register'){
    return (
      <form className={props.classForm}>
        {field.map((e, index) => <Input key={index} use='sign' specific='data' text={e.text} type={e.type} value={e.value} placeholder={e.placeholder} handleChange={e.handleChange} />)}
        <RadioInputArea setValue={setWorkPlace} />
        {error && <span className={props.classAlert}>{error}</span>}
        <Button type='submit' text='ENVIAR' handleClick={(e) => {
          e.preventDefault()
          password === confirmPassword ? props.register({ name, email, password, workPlace }) : setError('Senhas não conferem')
        }} />
      </form>
    )
  }
  
}

Form.defaultProps =  {
  classForm: '',
  classAlert: '',
}


export default Form