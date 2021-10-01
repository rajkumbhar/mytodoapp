import React from 'react';
import TodoItem from './TodoItem';
import { Stack } from '@fluentui/react';

const TodoList = (props:any) => {
    return (
        <Stack>
            {props.todo && props.todo.map((task:any, key:number) => (
                <TodoItem todo={task} key={key} deleteTodo={props.deleteTodo}/>
          ))}
        </Stack>
    );
}

export default TodoList;