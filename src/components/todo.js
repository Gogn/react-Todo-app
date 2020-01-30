import React, {Component} from 'react'

export default class Todos extends Component {




  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}