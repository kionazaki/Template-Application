import ReactDOM from 'react-dom';
import React from "react";
import classNames from "classnames";
import state$ from "app/state";
import connect from "app/rx-state/connect";
import bindAction from "app/rx-state/bindAction";
import TodoListActions from "app/actions/TodoListActions";

export class TodoItem extends React.Component {

    shouldComponentUpdate(newProps, newState) {
        var r = false;

        // ������ ����� ��������� label
        if ( (newState !== null)  && (this.state === null) ){
            if (newState.label !== this.props.label){
                r = true;
            }
        }

        // ���������� ������� ��������� label
        if ( (newState !== null)  && (this.state !== null) ){
            if (newState.label !== this.state.label){
                r = true;
            }
        }

        // ���������� ��������� ����������
        if (!(newProps.label !== this.props.label
            || newProps.checked !== this.props.checked
            || newProps.editMode !== this.props.editMode)) {
        } else {
            r = true;
        }

        return r;
    }

    componentDidUpdate(){
        var index = this.props.index;
            if (this.props.editMode === true){
                ReactDOM.findDOMNode(this.refs['todo_item_'+index]).focus();
            }
    }

    startEdit(index){
        this.props.startEdit(index);

    }

    render() {
        var label = this.state ? this.state.label : this.props.label;
        var index = this.props.index;
        let liClass = classNames({
            "completed": this.props.checked,
            "editing": this.props.editMode
        });

        return (
            <li className = {liClass} onDoubleClick = {()=>{this.props.startEdit(index)}}>
                <div className="view">
                    <input className = "toggle" type = "checkbox" checked = {this.props.checked} onChange = {() => {this.props.setCheckbox(index)}} />
                    <label>{label}</label>
                    <button className = "destroy" onClick={ () => {this.props.destroy(index)}} ></button>
                </div>
                <input
                    className="edit"
                    value={label}
                    onBlur = { ()=>{this.props.stopEdit(index)}}
                    onChange = {
                        (e) => {
                            // ����� � this.state, ����� ��������� ����������� �������� �����
                            // ��� ������� ��� ������� �������, ����� ��������� �������� ��������� �� ������� � ������� ���� ������ "����������"
                            this.setState({label: e.target.value});
                            // ����� �� � �����, �� ������� ��� ���������� ������������ � 1 ���, ����� ���� ���������� ���������.
                            // ������� ��� ����, ����� ��� ������� �������, ����� ������������ �� ����� ����� ������ ����� ����� 1 ������� - �� ��� �� ��� - ����������� � state$
                            // ���������� �� ��� ������� "�������" ������� �������
                            this.props.keyFlow({ index: index, label: e.target.value});
                        }
                    }
                    onKeyDown = {
                        (e) => {
                            if (e.key === "Enter") {
                                this.props.stopEdit(index);
                            }
                        }
                    }
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
    keyFlow: bindAction(TodoListActions.keyFlow$)

}))(TodoItem);