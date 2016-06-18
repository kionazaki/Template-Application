import React from "react";
import TodoItem from "app/components/TodoItem/TodoItem";

export class TodoList extends React.Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired
    };
    render() {
       let newsTemplate = this.props.items.map(function(item, index) {
            item.index = index;
            return (
                <TodoItem key={index} {...item}  />
            )
        });
       return (
            <ul className="todo-list">
                {newsTemplate}
            </ul>
    );
  }
}
export default TodoList;
