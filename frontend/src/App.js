import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import axios from 'axios';

import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/api/todos/")
      .then((res) => {
        setTodos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])

  return (
    <div className="App">
      <Navbar bg="light" style={{marginBottom: "20px"}}>
        <Container>
          <Navbar.Brand href="#">
            To-Do App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodoForm />
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
}

export default App;
