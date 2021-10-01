import React, { useState } from 'react';
import { Stack } from '@fluentui/react';

const TodoItem = (props:any) => {

    const [checked, setChecked] = useState(props.todo.completed);

    const handleClick = () => {
        setChecked(!checked);
    }

    const deleteItem = (id: number) => {
        props.deleteTodo(id);
        
    }

    return (
        <Stack>
            <div className="todoitem">
                <div className="todoitem-1">
                    <h3 className="todoitem-icon" onClick={handleClick}><i className="ms-Icon ms-Icon--CircleRing" aria-hidden="true"></i></h3>
                    <span className="todoitem-check-icon" onClick={handleClick} style={checked ? { display: "block"} : {display: "none"}}><i className="ms-Icon ms-Icon--SkypeCircleCheck" aria-hidden="true"></i></span>
                    <span className="todoitem-task" style={checked ? { textDecoration: "line-through"} : { textDecoration: ""}}>
                        {props.todo.title}
                        {checked === true ? " True" : " false"}
                    </span>
                </div>
                <div className="todoitem-2" onClick={() => deleteItem(props.todo.id)}><i className="ms-Icon ms-Icon--Delete" aria-hidden="true"></i></div>
                
                
            </div>
        </Stack>
    );
}

export default TodoItem;