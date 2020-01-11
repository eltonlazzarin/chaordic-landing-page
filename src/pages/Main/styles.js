import styled from 'styled-components';

import img from '../../assets/background-home.jpg';

export const Container = styled.div``;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${img}) ;
  width: 100%;
  height: 482px;

  h2 {
    font-size: 42px;
    font-family: "Roboto Slab";
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
  }

  p {
    width: 459px;
    height: 69px;
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    text-align: center;
  }

  input {
    height: 38px;
    width: 327px;
    background: none;
    font-size: 16px;
    font-family: "Myriad Pro";
    color: #ff6e14;
    border: none;
    border-bottom: 1px solid #ff6e14;

    ::placeholder {
      font-size: 16px;
      color: #ff6e14;
      font-family: "Myriad Pro";
    }
  }

  button {
    height: 38px;
    width: 106px;
    background: #ff6e14;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-left: 15px;
    border: none;

    &:hover {
      background: #ff8138;
    }
  }

  @media only screen and (max-width: 450px)  {
    h2 {
      font-size: 30px;
    }

    p {
      width: 320px;
      height: 69px;
      font-size: 15px;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    input {
      width: 300px;
    }

    button {
      width: 300px;
      margin: 12px auto;
    }
  }
`;

export const HitsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #eee;

  &::before {
    content: " ";
    right: 30px;
    bottom: -15px;
    border-top: 50px solid #fff;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    border-bottom: none;
  }
`;

export const Content = styled.div`
  h3 {
    font-size: 32px;
    font-family: "Roboto Slab";
    font-weight: 400;
    color: #aa1423;
    text-align: center;
    padding: 20px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 172px;
    height: 48px;
    font-size: 32px;
    font-family: "Roboto Slab";
    font-weight: 400;
    color: #aa1423;
    text-align: center;

    background: #ffffff;
    padding: 10px;
    border-radius: 5px;
    border: 0.5px solid #d2d2d2;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #777;
    text-align: center;
    padding: 10px;
    margin-bottom: 40px;
  }
`;
