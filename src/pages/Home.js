import React from 'react'
import Todo from "../components/todo";

export const Home = () => {

  function text(text) {
    return text
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Home</h1>
          <h5 className='mb-4'>This is react app example that using just local state to store data.</h5>
          <h4>How it works?</h4>
          <details>
            <summary>Project tree</summary>
            <p className='mb-0'>.</p>
            <p className='mb-0'>├── App.js</p>
            <p className='mb-0'>├── components</p>
            <p className='mb-0'>│   ├── navbar.js</p>
            <p className='mb-0'>│   └── todo.js</p>
            <p className='mb-0'>├── index.css</p>
            <p className='mb-0'>├── index.js</p>
            <p className='mb-0'>├── pages</p>
            <p className='mb-0'>│   ├── Home.js</p>
            <p className='mb-0'>│   └── Todos.js</p>
            <p className='mb-0'>└── serviceWorker.js</p>
          </details>

          <article>
            <p className='mt-2' >First of all, the main page is <strong>index.html</strong>. They have a {text('<div id=”root”></div>')} </p>
            <p>A rendered JSX from <strong>index.js</strong> will be inserted to this block. <strong>index.js</strong> includes code from <strong>App.js</strong> component.</p>
            <p><strong>App.js</strong> uses <i>react-router-dom</i> that uses <i>React Router</i> to bind DOM.</p>
            <p><i>React Router</i> dynamically render component <strong>pages/Home</strong> where you are now. <i>(so the entire app doesn't reloading  when a link is opens, only necessary elements refreshing)</i></p>
            <p><strong>Home.js</strong> component uses <strong>components/navbar.js</strong> to add navigation bar on the top of the app.</p>
            <p>The <strong>pages/Todos.js</strong> component placed on the /todo path, that can be reached by clicking to the link on the top right corner on navbar.</p>
            <hr/>

            <h5>The Local state</h5>
            <p><strong>Todos.js</strong> have a <i>local state</i> that have a array of objects.</p>
            <p><strong>Todos.js</strong> include list of todos from <strong>components/todo.js</strong> by mapping state.todos: {text('this.state.todos.map((todo, id) => ( ... )')},
              so every todo object from state.todos array will be shown from <strong>components/todo.js </strong>
              with parameters: {text('todo={todo}, key={id}, doneTodo={this.doneTodo}, deleteTodo={event => this.deleteTodo(id)}')}</p>
            <ul>
              <li><i>todo</i> - is the current state.todos[] object from <i>map</i> method</li>
              <li><i>key</i> - is necessary parameter for the <i>map</i> method</li>
              <li><i>doneTodo</i> - is the function for update state.todos.done parameter</li>
              <li><i>deleteTodo</i> - is the function to delete todo object from state.todos array</li>
            </ul>
            <p>So when you clicking on the todo element or delete button the <strong>components/todo.js</strong>
              calling function from props and action from <strong>pages/Todos.js</strong> is triggered</p>
            <p><strong>pages/Todos.js</strong> also have the input that triggered <i>addTodo</i> function that update state.todos.todoNew.
              After state.todos.todoNew was updated, new todo can be stored by clicking on "Add todo" button, that triggered <i>addTodo</i> function and update the state.</p>
            <hr/>

            <h5>Manegement state via Redux</h5>
            The Redux implementation of this app placed here: https://github.com/Gogn/react-Todo-app_Redux
            <hr/>

            <h5>Use hooks</h5>
            Version that uses Hooks state management app placed here:


          </article>

          </div>
      </div>
    </div>
  )

}