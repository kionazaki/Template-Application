import React from "react";
import TodoToggleAll from "app/components/TodoToggleAll/TodoToggleAll";
import TodoList from "app/components/TodoList/TodoList";


export class TodoApp extends React.Component {
  render() {
      return (
      <div>
          <section className="todoapp">
                <div>
                    <header className="header">
                        <h1>todos</h1>
                        <input autoFocus={true} className="new-todo" placeholder="What needs to be done?" value=""/>
                    </header>
                    <section className="main">
                        <TodoToggleAll toggleAll = {this.props.todos.toggleAll}/>
                        <TodoList items = {this.props.todos.items}/>
                    </section>
                    <footer className="footer">
                        <span className="todo-count">
                            <strong>2</strong>
                            <span> </span>
                            <span>items</span>
                            <span> left</span>
                        </span>
                        <ul className="filters">
                            <li>
                                <a href="#/" className="selected">All</a>
                            </li>
                            <span> </span>
                            <li>
                                <a href="#/active" className="">Active</a>
                            </li>
                            <span> </span>
                            <li>
                                <a href="#/completed" className="">Completed</a>
                            </li>
                        </ul>
                        <button className="clear-completed">Clear completed</button>
                    </footer>
                </div>
          </section>
          <footer className="info">
              <p>Double-click to edit a todo</p>
              <p>Created by <a href="https://github.com/kionazaki">Nazaki</a></p>
              <p>Motivated by <a href="http://todomvc.com">TodoMVC</a></p>
          </footer>
      </div>
    );
  }
}

export default TodoApp;
