import React from 'react';

import twitter from '../../assets/icon-twitter.png'
import facebook from '../../assets/icon-facebook.png'

import { Container, Content, TextCompany, SocialNetwork } from './styles';

const Footer = () => {
  return (
    <Container>
      <Content>
        <TextCompany>
          <p>Chr.dc</p>
        </TextCompany>
        <SocialNetwork>
          <img src={twitter} alt='Icon Twitter' />
          <img src={facebook} alt='Icon Facebook' />
        </SocialNetwork>
      </Content>
    </Container>
  );
}

export default Footer;
