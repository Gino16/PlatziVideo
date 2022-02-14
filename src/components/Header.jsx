import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { gravatar } from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';

function Header(props) {
  const { user } = props;

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={user ? gravatar(user.email) : userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/'>Cuenta</Link></li>
          <li><Link to='/login'>Iniciar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(null, mapStateToProps)(Header);
