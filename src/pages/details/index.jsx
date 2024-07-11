import {Container,Links,Content} from "./style"


import { Header } from "../../components/header";
import {Button} from '../../components/button/index';
import { ButtonText } from "../../components/button_text";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";



export  function Details(){

  return(
    
   <Container>
     
    <Header/>

    <main>
     <Content>

    
     <ButtonText title ="Excluir nota"/>
     
    <h1>Introdução ao React</h1>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer
       took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularized in the 1960s with the release of 
          Letraste sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Ladus PageMaker including versions of Lorem Ipsum.

    </p>


    <Section title ="links uteis">
      <Links>

        <li><a href="@">https://app.rocketseat.com.br/home</a></li>
        <li><a href="@">https://app.rocketseat.com.br/home</a></li>

      </Links>
    </Section>

    <Section title ="Marcadores">

      <Tag title = "express"/>
      <Tag title = "nodejs"/>
        
    </Section>      

    <Button title = "votar"/>

    </Content>
    </main>

   </Container>
    
  );
}