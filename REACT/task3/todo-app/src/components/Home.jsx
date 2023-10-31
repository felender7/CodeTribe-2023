import React from 'react'
import TodoListForm from './TodoListForm'
import TodoList from './TodoList'


function Home() {
  return (
    <div className="mt-5">
      <h1>Create a To-do list a</h1>
      <hr />
      <TodoListForm />
    </div>
  )
}

export default Home
