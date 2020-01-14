import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;

  h1 {
    font-size: 32px;
    font-family: "Roboto Slab";
    font-weight: 400;
    color: #aa1423;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Items = styled.ul`
  max-width: 368px;
  margin: 0 auto;

  ul {
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    & + li {
      border-top: 1px solid #eee;
    }
  }

  a {
    font-size: 16px;
    font-weight: 700;
    color: #aa1423;
    text-decoration: none;
  }

  span {
  font-size: 16px;
  font-weight: 400;
  color: #777;
  text-align: right;
  }
`;
