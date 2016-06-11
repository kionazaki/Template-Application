import React from "react";
import Counter from "app/components/Counter";
import TodoApp from "app/components/TodoApp";


class App extends React.Component {
  render() {
    return (
      <div>
        <Counter/>
        <TodoApp/>
      </div>
    );
  }
}

export default App;
