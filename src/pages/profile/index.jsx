
import { Link } from "react-router-dom";


import { Container, Form, Avatar } from "./style";


import { Input } from '../../components/input';


import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

import { Button } from '../../components/button';

export function Profile() {
    return (
        <Container>
            <header>

            <Link to = '/'>

                    <FaArrowLeft />
                    
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/guipronto.png" alt="imagem do usuário" />
                    
                    <label htmlFor="avatar">
                        <FaCamera />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FaUserLarge}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={MdOutlineMail}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={RiLockPasswordLine}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={RiLockPasswordLine}
                />

                <Button title="Salvar"></Button>
            </Form>
        </Container>
    )
}
