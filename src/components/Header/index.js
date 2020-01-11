import React from 'react';

import logo from '../../assets/logo-chaordic.png'

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <img src={logo} alt='Logo' />
    </Container>
  );
}

export default Header;
