import ReactDOM from 'react-dom';



import React from "react";
import classNames from "classnames";
import state$ from "app/state";
import connect from "app/rx-state/connect";
import bindAction from "app/rx-state/bindAction";
import TodoListActions from "app/actions/TodoListActions";
import TodoItem from "app/components/TodoItem";




export class TodoList extends React.Component {
 /* static propTypes = {
    counter: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired

  };
*/




    render() {
        var setCheckbox = this.props.setCheckbox;
        var destroy = this.props.destroy;
        var startEdit = this.props.startEdit;
        var stopEdit = this.props.stopEdit;
        var setLabel = this.props.setLabel;

        let newsTemplate = this.props.itemList.map(function(item, index) {

            let liClass = classNames({
                "completed": item.checked,
                "editing": item.editMode
            });

            var handleKeyDown = function(evt) {
                if (evt.key === "Enter" && !isEmpty(this.props.value)) {
                    stopEdit(index);
                }
            };



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

export default connect(state$, state => ({
    itemList: state.todos.items,
    setCheckbox: bindAction(TodoListActions.setCheckbox$),
    destroy: bindAction(TodoListActions.destroy$),
    startEdit: bindAction(TodoListActions.startEdit$),
    stopEdit: bindAction(TodoListActions.stopEdit$),
    setLabel: bindAction(TodoListActions.setLabel$)

/*  counter: state.counter,
  increment: bindAction(CounterActions.increment$),
  decrement: bindAction(CounterActions.decrement$)
*/
}))(TodoList);
