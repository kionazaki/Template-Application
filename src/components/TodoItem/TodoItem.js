import ReactDOM from 'react-dom';
import React from "react";
import classNames from "classnames";
import dispatcher$ from "app/dispatcher";
import sendCommand from "app/library/sendCommand"

export class TodoItem extends React.Component {

    static propTypes = {
        label: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool.isRequired,
        restoreLabel: React.PropTypes.string.isRequired,
        index: React.PropTypes.number.isRequired
    };

    shouldComponentUpdate(newProps, newState){
        var r = false;
        // Если изменились параметры компонента
        if (!(newProps.label !== this.props.label
            || newProps.checked !== this.props.checked
            || newProps.restoreLabel !== this.props.restoreLabel)) {
        } else {
            r = true;
        }
        return r;
    }

    componentDidUpdate(){
        var index = this.props.index;
        if (!!this.props.restoreLabel){
            ReactDOM.findDOMNode(this.refs['todo_item_'+index]).focus();
        }
    }

    render() {
        const name = 'TodoItem';
        const label = this.state ? this.state.label : this.props.label;
        const index = this.props.index;
        const liClass = classNames({
            "completed": this.props.checked,
            "editing": !!this.props.restoreLabel
        });

        return (
            <li
                className = {liClass}
                onDoubleClick =  {() => sendCommand(name, 'startingItemEditing', {index: index})} >

                <div className="view">
                    <input
                        className = "toggle"
                        type = "checkbox"
                        checked = {this.props.checked}
                        onChange = {() => sendCommand(name, 'changeItemCheckbox', {index: index})} />

                    <label>{label}</label>
                    <button
                        className = "destroy"
                        onClick = {() => sendCommand(name, 'destroyItem', {index: index})} >
                    </button>
                </div>
                <input
                    ref = {"todo_item_"+index}
                    className="edit"
                    value = {label}
                    onBlur  = {() => sendCommand(name, 'stoppingItemEditing', {index: index})}
                    onChange = {(e) => sendCommand(name, 'setItemLabel', { index: index, label: e.target.value})}
                    onKeyDown = {(e) => sendCommand(name, 'itemKeyDown', { index: index, key: e.key})} />
            </li>
        );
    }
}

export default TodoItem;