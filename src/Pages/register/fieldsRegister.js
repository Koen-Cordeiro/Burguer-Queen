export const fieldsRegister = [
  { 
    text: "Nome", 
    type: "text", 
    value: name, 
    placeholder: "Seu nome de detetive", 
    handleChange: (e) => setName(e.currentTarget.value) 
  },
  { 
    text: "E-mail", 
    type: "email", 
    value: email, 
    placeholder: "detetive@exemplo.com.br", 
    handleChange: (e) => setEmail(e.currentTarget.value) 
  },
  { 
    text: "Senha", 
    type: "password", 
    value: password, 
    placeholder: "Cifra de até 6 caracteres", 
    handleChange: (e) => setPassword(e.currentTarget.value) 
  },
  { 
    text: "Confirme sua senha", 
    type: "password", 
    value: confirmPassword, 
    placeholder: 'Confirme sua cifra', 
    handleChange: (e) => setConfirmPassword(e.currentTarget.value) 
  },
]