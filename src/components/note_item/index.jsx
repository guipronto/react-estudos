import {Container} from './style'
import { FiPlus,FiX  } from "react-icons/fi";

export function NoteItem({isNew,value,onClick,...rest}){
    return(
        <Container isNew ={isNew}>

            <input type="text" value={value} readOnly={!isNew} {...rest}/>

            <button onClick={onClick} type='button' className= {isNew ? 'button-delete': 'button-add '}>
              
              {isNew ? <FiPlus/> : <FiX/>}

            </button>

        </Container>
    )
}