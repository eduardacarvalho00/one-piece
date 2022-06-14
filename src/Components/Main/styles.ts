import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  h1{
    text-align: center;
  }
  
  div{
    display: flex;
    align-items: center;
    flex-direction: column;

    img{
      width: 200px;
    }

    ul{
      padding-right: 1rem;
    }

    p,li{
      text-align: justify;
    }
  }

  a{
    img{
      width: 6rem;
    }
  } 
`