import { Container, Form, BackgroundImage } from "./style";

import { Link } from "react-router-dom"

import { Input } from '../../components/input';

import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from '../../components/button';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>rocketnotes</h1>
                <p>aplicação para gerenciar e salvar seus links uteis</p>

                <h2>faça seu login</h2>

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

                <Button title="entra"></Button>

                <Link to = '/register'>Criar conta</Link>
            </Form>

            <BackgroundImage />
        </Container>
    );
}
