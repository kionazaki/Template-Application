import React from "react";
import sendCommand from "app/library/sendCommand"

class TodoClearCompleted extends React.Component {
    render() {
        const name = 'TodoClearCompleted';
        return (
            <button
                className="clear-completed"
                onClick = {() => sendCommand(name, 'clearCompleted')} >
                Clear completed
            </button>
        );
    }
}

export default TodoClearCompleted;
