import React, { useState } from 'react';

import { Container, Banner, HitsSection, Content } from './styles';

import Top10List from '../../components/Top10List';

export default function Main() {
  const [placeholderValue, setPlaceholderValue] = useState('https://google.com');
  const [buttonValue, setButtonValue] = useState('Encurtar');

  const handleFormSubmit = e => {
    e.preventDefault()
  }

  const handleChangeValues = () => {
    setPlaceholderValue('http://chr.dc/xyzxyz')
    setButtonValue('Copiar')
  }

  return (
    <Container>
      <Banner>
        <h2>Encurte seus links.</h2>
        <p>Links são longos. Encurte os links que você deseja compartilhar, e acompanhe enquanto viajam através da internet.</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder={placeholderValue} />
          <button onClick={handleChangeValues}>{buttonValue}</button>
        </form>
      </Banner>
      <Top10List />
      <HitsSection>
        <Content>
          <h3>HITS</h3>
          <span>35.713.571</span>
          <p>Cliques em links</p>
        </Content>
      </HitsSection>
    </Container>
  );
}
