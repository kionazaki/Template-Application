import React from "react";
import TodoToggleAll from "app/components/TodoToggleAll/TodoToggleAll";
import TodoList from "app/components/TodoList/TodoList";

class TodoMain extends React.Component {

    static propTypes = {
        toggleAll: React.PropTypes.bool.isRequired,
        items: React.PropTypes.array.isRequired,
        pathName: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <section className="main">
                <TodoToggleAll toggleAll = {this.props.toggleAll}/>
                <TodoList items = {this.props.items} pathName = {this.props.pathName} />
            </section>
        );
    }
}

export default TodoMain;
