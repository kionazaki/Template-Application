import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import TodoApp from "app/components/TodoApp/TodoApp";

class App extends React.Component {
    render() {
        return(
            <Router  history = {hashHistory}>
                <Route path="*" component={TodoApp} />
            </Router>
        );
    }
}

export default App;
