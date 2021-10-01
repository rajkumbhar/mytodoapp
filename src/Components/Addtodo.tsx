import React, { useState } from 'react';
import { Stack } from '@fluentui/react';

const Addtodo = (props:any) => {

    const [task, setTask] = useState("");

    const handleOnChange = (e: any) => {
        setTask(e.target.value);
    }

    // const handleKeyPress = (e) => {
    //     e.charCode === 13 ? sayhello(task) : console.log("");
    // }

    const handleClick = () => {
        props.addTodo(task);
        setTask("");
    }

    return (
        <Stack>
            <div className="addtodo">
                <h2 onClick={handleClick}>
                    <i 
                        style={{caretColor: "transparent"}} 
                        className="ms-Icon ms-Icon--Add" 
                        aria-hidden="true"/>
                </h2>
                <input
                    className="addtodo-input"
                    placeholder="Add a task"
                    name="task"
                    value={task}
                    onChange={handleOnChange}
                />
            </div>
        </Stack>
    );
}

export default Addtodo;