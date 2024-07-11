import {FaPowerOff} from 'react-icons/fa6'
import { Container,Profile,Logout } from "./style";



export function Header(){

    return(
   <Container>

    <Profile to = '/profile'>
        <img src="http://github.com/guipronto.png" alt="foto do usuário" />

       <div>
       <span>Bem vindo</span>
        
        <strong>Guilherme</strong>

       </div>
    </Profile>
      
    <Logout>
      <FaPowerOff/> 

    </Logout>

   </Container>

)
}