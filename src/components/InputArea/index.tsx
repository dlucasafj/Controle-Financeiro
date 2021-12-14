import { category } from '../../data/category'
import { Item } from '../../types/item'
import * as C from './styles'

type InputAreaProps ={
    onAdd: (item:Item)=> void
}
export const InputArea =({onAdd}:InputAreaProps)=>{

    const handleAddEvent=()=>{
        // let newItem: Item={
        //     date:,
        // }
        // onAdd(newItem)
    }
    return (
        <C.Container>
            <button onClick={handleAddEvent}></button>
        </C.Container>
    )
}