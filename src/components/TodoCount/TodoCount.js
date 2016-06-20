import React from "react";

class TodoCount extends React.Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired
    };
    render() {
        const count = this.props.items.filter((item)=>!item.checked).length;
        return (
            <span className="todo-count">
                <strong>{count}</strong>
                <span> </span>
                <span>items</span>
                <span> left</span>
            </span>
        );
    }
}

export default TodoCount;
