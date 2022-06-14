import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column;
  div{
    position: relative;
    height: 19rem;
    width: 100%;
    background: #ff7b00;
    border-radius: 90%;
    bottom: 9.2rem;
  }
  img{
    padding-top: 10rem;
    padding-left: 6rem;
    @media(min-width: 375px){
      padding-left: 7.5rem;
    }
    @media(min-width: 414px){
      padding-left: 9rem;
    }
    @media(min-width: 1024px){
      padding-left: 28rem;
    }
    @media(min-width: 1920px){
      padding-left: 55rem;
    }
  }
  
  h1{
    margin: 0;
    text-align: center;
    padding: 1rem;
    font-size: 3rem;
  }
`