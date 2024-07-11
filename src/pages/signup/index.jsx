import { Container, Form, BackgroundImage } from "./style";

import { Link } from "react-router-dom";

import { Input } from '../../components/input';


import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";

import { Button } from '../../components/button';

export function SignUp() {
    return (

        
        <Container>
           <BackgroundImage />

            <Form>
                <h1>rocketnotes</h1>
                <p>aplicação para gerenciar e salvar seus links uteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="name"
                    icon={FaUserLarge}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={MdOutlineMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={RiLockPasswordLine}
                />

                <Button title="cadastrar"></Button>

                <Link to = '/'>Voltar para o login</Link>
            </Form>

            <BackgroundImage />
        </Container>
    );
}
