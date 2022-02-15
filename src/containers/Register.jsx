import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

function Register() {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input className='input' name='name' type='text' placeholder='Nombre' onChange={handleInput} />
          <input className='input' name='email' type='text' placeholder='Correo' onChange={handleInput} />
          <input className='input' name='password' type='password' placeholder='Contraseña' onChange={handleInput} />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
}

export default Register;
