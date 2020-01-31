import React, {Component} from 'react'
import Todo from "../components/todo";

export default class Todos extends Component {

  state = {
    todos: [
      {name: 'First', done: false, id: 0},
      {name: 'Second', done: false, id: 1},
      {name: 'Third', done: false, id: 2},
    ],
    todoNew: {name: '', done: false}
  }

  addTodoHandler = (event) => {
    this.setState({
      todoNew: {name: event.target.value, done: false}
    })
  }

  addTodo = (event) => {
    event.preventDefault()
    this.setState({todos: [...this.state.todos, this.state.todoNew]})
  }

  doneTodo = (id) => {
    this.setState({
      new_todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    const new_todos = this.state.todos.concat()
    new_todos.splice(id, 1)
    console.log(new_todos)
    this.setState({todos: new_todos})
  }

  render() {
    return (
      <>
        <div className='row'>
          <div className="col text-center">
            <h1 className='mb-4'>Todo list</h1>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className="col-8">
            <ul className="list-group mb-4">
              {this.state.todos.map((todo, id) => (
                <Todo
                  todo={todo}
                  key={id}
                  doneTodo={this.doneTodo}
                  deleteTodo={event => this.deleteTodo(id)}
                />
              ))}
            </ul>
          </div>
        </div>

        <form className='row justify-content-center' onSubmit={this.addTodo}>
            <div className="col-10 input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Describe what you want to do"
                onChange={this.addTodoHandler}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onChange={this.addTodo}
                >Add todo
                </button>
              </div>
            </div>
        </form>
      </>
    )
  }
}
