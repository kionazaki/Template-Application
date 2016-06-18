import React from "react";
import TodoApp from "app/components/TodoApp/TodoApp";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoApp {...this.props}/>
      </div>
    );
  }
}

export default App;
