import React from "react";
import sendCommand from "app/library/sendCommand"

class TodoHeader extends React.Component {
    static propTypes = {
        newTodoValue: React.PropTypes.string.isRequired
    };
    render() {
        const name = 'TodoHeader';
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    autoFocus={true}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.props.newTodoValue}
                    onChange = {(e) => sendCommand(name, 'setNewTodo', {newTodoValue: e.target.value})}
                    onKeyDown = {(e) => sendCommand(name, 'addNewItem', e)} />
            </header>
        );
    }
}

export default TodoHeader;
