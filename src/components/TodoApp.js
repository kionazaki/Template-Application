import React from "react";
import state$ from "app/state";
import connect from "app/rx-state/connect";
import TodoList from "app/components/TodoList";
//import bindAction from "app/rx-state/bindAction";
//import CounterActions from "app/actions/CounterActions";

export class TodoApp extends React.Component {
 /* static propTypes = {
    counter: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired

  };
*/

  render() {

      var newsTemplate = this.props.items.map(function(item, index) {
          return (
              <li key = {index} className="completed">
                  <div className="view">
                      <input className="toggle" type="checkbox" checked=""/>
                      <label>{item.label}</label>
                      <button className="destroy"></button>
                  </div>
                  <input className="edit" value="{item.label}"/>
              </li>
          )
      });



      return (

        <section className="todoapp">
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input autoFocus={true} className="new-todo" placeholder="What needs to be done?" value=""/>
                </header>
                <section className="main">
                    <input className="toggle-all" type="checkbox"/>
                    <TodoList/>
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
    );
  }
}

export default connect(state$, state => ({
    items: state.todos.items
/*  counter: state.counter,
  increment: bindAction(CounterActions.increment$),
  decrement: bindAction(CounterActions.decrement$)
*/
}))(TodoApp);
