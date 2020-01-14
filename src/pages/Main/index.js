import React, { useState } from 'react';

import { Container, Banner, HitsSection, Content } from './styles';

import Top10List from '../../components/Top10List';

export default function Main() {
  const [placeholderValue, setPlaceholderValue] = useState(
    'https://google.com'
  );
  const [buttonValue, setButtonValue] = useState('Shorten');

  const handleFormSubmit = e => {
    e.preventDefault();
  };

  const handleChangeValues = () => {
    setPlaceholderValue('http://chr.dc/xyzxyz');
    setButtonValue('Copy');
  };

  return (
    <Container>
      <Banner>
        <h2>Shorten your links.</h2>
        <p>
          Links are long. Shorten the links you want to share, and follow along
          as they travel over the internet.
        </p>
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
          <p>Clicks on links</p>
        </Content>
      </HitsSection>
    </Container>
  );
}
