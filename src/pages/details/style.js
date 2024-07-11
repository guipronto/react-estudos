import styled from "styled-components";

export const Container = styled.div `

width: 100%;
height: 100vh;

display: grid;
grid-template-rows:10.5rem auto;
grid-template-areas: 
"Header" 
"Container";



`;

export const Links = styled.ul `

list-style: none;

>li{
    margin-top: 1.2rem;
}
a{
    color: white;
}

`;

export const Content = styled.div`


grid-area: content;

padding: 6.4rem 0;
  



  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }    

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }


`