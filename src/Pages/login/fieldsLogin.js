export const fieldsLogin = [
  { 
    text: "E-mail", 
    type: "email", 
    value: email, 
    handleChange: (e) => setEmail(e.currentTarget.value) 
  },
  { 
    text: "Senha", 
    type: "password", 
    value: password, 
    handleChange: (e) => setPassword(e.currentTarget.value) 
  },
];