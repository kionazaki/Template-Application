import React from "react";
import Counter from "app/components/Counter";
import Counter2 from "app/components/Counter2";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter2/>
        <Counter/>
      </div>
    );
  }
}

export default App;
