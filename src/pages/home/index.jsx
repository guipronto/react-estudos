import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import {Note} from "../../components/note"
import { Input } from "../../components/input";
import { Header } from '../../components/header'
import {Section}  from "../../components/section"
import { ButtonText } from '../../components/button_text'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Nodejs" /></li>
      </Menu>

      <Search>

       <Input placeholder = "pesquisar pelo titulo" icon ={IoIosSearch}/>

      </Search>

      <Content>

      <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
              
            ]
          }}
          />
        </Section>

      </Content>

      <NewNote to = '/new'>

      <FaPlus />
        Criar Notas

      </NewNote>
    </Container>
  )
}