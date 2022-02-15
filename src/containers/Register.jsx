import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const navigate = useNavigate();
    return (
      <Component
        {...props}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

function Register(props) {
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
    props.registerRequest(form);
    props.navigate('/');
    // console.log(form);
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

const mapDispatchToProps = {
  registerRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(Register));
