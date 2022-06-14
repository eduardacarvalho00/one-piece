import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  padding: 1rem;

  section {
    height: 1px;
    background: linear-gradient(90deg, rgba(255,123,0,1) 35%, rgba(254,1,1,1) 100%);
  }
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