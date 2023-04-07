import React from 'react'
import ContactForm from '../Components/ContactForm';
import Login from '../Components/Login';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      {/*
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <h1>Acá va el Form</h1>      
      */}
      <ContactForm/>
    </div>
  )
}

export default Contact;