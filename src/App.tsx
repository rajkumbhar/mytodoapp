import React, { useState, useEffect } from 'react';
import { Stack } from '@fluentui/react';
import axios from 'axios';

import Header from './Components/Header';
import Titlebar from './Components/Titlebar';
import Addtodo from './Components/Addtodo';
import TodoList from './Components/TodoList';

function App() {

  const [todo, setTodo] = useState([{
    id: 1,
    title: "Send an email to Mark",
    completed: false
  }]);

  const ApiRequest:any = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            //storing that data into useState variable
            setTodo(response.data);
        })
  }

  useEffect(()=> {
    ApiRequest();
  }, [])


  const addTodo = (todoname:string) => {
    if (todoname != "") {
      var newId = todo.length + 1;
      var completed = false;
      var newTodo = [...todo, {id: newId, title: todoname, completed: completed}];
      setTodo(newTodo);
    }
  };

  const deleteTodo = (id: number) => {
    const newTodo = todo.filter(todo => todo.id != id);
    setTodo(newTodo);
  }
  
  return (
    <div className="wrapper">
        <div>
          <Header/>
          <Titlebar/>
          <div className="todolistWindow">
            <TodoList todo={todo} deleteTodo={deleteTodo}/>
          </div>
        </div>
        <div>
          <Addtodo addTodo={addTodo}/>
        </div>    
    </div>
  );
}

export default App;
