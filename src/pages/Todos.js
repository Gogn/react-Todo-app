import React, {Component} from 'react'
import Todos from "../components/todos";

export default class Todo extends Component {

  state = {
    todos: [
      {name: 'First', done: false, id: 1}
    ]
  }

  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = e => {
    // e.preventDefault()
    // const newTodo =
  }

  render() {
    return (
      <div>
        <h1>Список задач</h1>

        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>

        <form onSubmit={this.addTodo}>
          <input type="text" placeholder='Задачи'></input>
          <button type='submit'>Добавить задачу</button>
        </form>
      </div>
    )
  }
}
