import React from 'react';

import ItemsData from '../../data/urls.json';

import { Container, Items } from './styles';

const Top10List = () => {
  return (
    <Container>
      <h1>TOP 10</h1>
      <Items>
        {ItemsData.map(item => (
          <li key={item.id}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.shortUrl}
            </a>
            <span>{item.hits}</span>
          </li>
        ))}
      </Items>
    </Container>
  );
}

export default Top10List;
