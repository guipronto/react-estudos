import { Container,Form} from "./style";

import { Link } from "react-router-dom";

import {Header} from "../../components/header"
import {Input} from '../../components/input'
import {TextArea} from '../../components/text_area'
import {NoteItem} from '../../components/note_item'
import {Section} from '../../components/section'
import {Button} from '../../components/button'

export function New(){
    return(
        
        <Container>
            <Header></Header>

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to = "/">Voltar</Link>
                    </header>

                    <Input placeholder ="titulo"type="text"/>

                    <TextArea placeholder = "Observações" />

                    <Section title= 'Links uteis'>

                    <NoteItem value= "https://github.com/guipronto" />
                    <NoteItem isNew placeholder = "novo link" />

                    </Section>

                   <Section title= 'Marcadores'>
                    
                    <div className="tags">
                   <NoteItem value= "react" />
                   <NoteItem isNew placeholder = "nova tag" />

                   </div>

                   </Section>

                   <Button title= "Salvar"></Button>
                   
                </Form>
            </main>

        </Container>
    )
}