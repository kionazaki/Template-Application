import ReactDOM from 'react-dom';



import React from "react";
import classNames from "classnames";
import state$ from "app/state";
import connect from "app/rx-state/connect";
import bindAction from "app/rx-state/bindAction";
import TodoListActions from "app/actions/TodoListActions";





export class TodoItem extends React.Component {

/*
    componentDidUpdate(){
        var index = this.props.index;
            if (this.props.editMode === true){
                ReactDOM.findDOMNode(this.refs['todo_item_'+index]).focus();
            }

    }

*/


    startEdit(index){
        this.props.startEdit(index);

    }


    render() {
        var label = this.props.label;
        var index = this.props.index;
        let liClass = classNames({
            "completed": this.props.checked,
            "editing": this.props.editMode
        });


        return (
            <li
                className = {liClass}
                onDoubleClick = {()=>{this.props.startEdit(index)}}
            >


                <div className="view">
                    <input
                        className = "toggle"
                        type = "checkbox"
                        checked = {this.props.checked}
                        onChange = {() => {this.props.setCheckbox(index)}}
                    />
                    <label>{label}</label>
                    <button
                        className = "destroy"
                        onClick={
 () => {this.props.destroy(index)}} >
                    </button>
                </div>
                <input

                    className="edit"
                    value={label}
                    onBlur = {
 ()=>{this.props.stopEdit(index)}}
                    onChange = {
 (e) => {
 this.props.setLabel({
 index: index,
 label: e.target.value})}}


                    onKeyDown = {
 (e) => {
 if (e.key === "Enter") {
 this.props.stopEdit(index);
 }

 }}




                    ref = {"todo_item_"+index}
                    />
            </li>
        );

    }
}

export default connect(state$, state => ({
    setCheckbox: bindAction(TodoListActions.setCheckbox$),
    destroy: bindAction(TodoListActions.destroy$),
    startEdit: bindAction(TodoListActions.startEdit$),
    stopEdit: bindAction(TodoListActions.stopEdit$),
    setLabel: bindAction(TodoListActions.setLabel$)
}))(TodoItem);


/*}
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

 */