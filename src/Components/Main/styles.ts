import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  
  section {
    height: 1px;
    background: linear-gradient(90deg, rgba(255,123,0,1) 35%, rgba(254,1,1,1) 100%);
    @media(min-width: 1520px){
     margin: 0 auto;
     max-width: 1200px ;
    }
  }
  h1{
    text-align: center;
  }
  
  div{
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(min-width: 1520px){
      margin: 0 auto;
      max-width: 1200px ;
    }
    img{
      width: 200px;
      @media(min-width: 1520px){
      width: 400px;
    }
    }

    ul{
      padding-right: 1rem;
    }

    p,li{
      text-align: justify;
      @media(min-width: 1520px){
      font-size: 1.2rem;
    }
    }
  }

  a{
    img{
      width: 6rem;
    }
  } 
`