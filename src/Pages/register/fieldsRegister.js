export const fieldsRegister = [
  { 
    label: 'Nome', 
    type: 'text', 
    name: 'name',
    placeholder: 'Seu nome de detetive', 
    // value: name, 
    // handleChange: (e) => setName(e.currentTarget.value) 
  },
  { 
    label: 'E-mail', 
    type: 'email', 
    name: 'email',
    placeholder: 'detetive@exemplo.com.br', 
    // value: email, 
    // handleChange: (e) => setEmail(e.currentTarget.value) 
  },
  { 
    label: 'Senha', 
    type: 'password',
    name: 'password', 
    placeholder: 'Cifra de até 6 caracteres', 
    // value: password, 
    // handleChange: (e) => setPassword(e.currentTarget.value) 
  },
  { 
    label: 'Confirme sua senha', 
    type: 'password',
    name: 'password', 
    placeholder: 'Reescreva sua cifra',
    // value: confirmPassword,  
    // handleChange: (e) => setConfirmPassword(e.currentTarget.value) 
  },
]