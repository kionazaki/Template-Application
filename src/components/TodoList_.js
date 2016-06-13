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

    componentDidUpdate(){
        this.props.itemList.forEach( (item, index)=>{
            if (item.editMode === true){
                ReactDOM.findDOMNode(this.refs['todo_item_'+index]).focus();
            }
        });
    }


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




            return (



            <li key = {index} className={liClass} onDoubleClick = { () => {startEdit(index)} }>
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={item.checked}
                            onChange = {
                                () => {setCheckbox(index)}} />
                        <label>{item.label}</label>
                        <button
                            className = "destroy"
                            onClick={
                                () => {destroy(index)}} >
                        </button>
                    </div>
                    <input

                        className="edit"
                        value={item.label}
                        onBlur = {
                            ()=>{stopEdit(index)}}
                        onChange = {
                            (e) => {
                                setLabel({
                                    index: index,
                                    label: e.target.value})}}


                        onKeyDown = {
                            (e) => {
                                if (e.key === "Enter") {
                                    stopEdit(index);
                                }

                                    }}




                        ref = {"todo_item_"+index}
                        />
                </li>

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
