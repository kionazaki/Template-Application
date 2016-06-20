import React from "react";
import TodoClearCompleted from "app/components/TodoClearCompleted/TodoClearCompleted";
import TodoCount from "app/components/TodoCount/TodoCount";
import {Link} from 'react-router';

class TodoFooter extends React.Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired
    };
    render() {
        const className_all = ['/completed','/active' ].indexOf(this.props.pathName) !== -1?'':"selected";
        const className_active = ['/active' ].indexOf(this.props.pathName) === -1?'':"selected";
        const className_completed = ['/completed' ].indexOf(this.props.pathName) === -1?'':"selected";
        const completedExists = this.props.items.some((item)=>item.checked);

        return (
            <footer className="footer">
                <TodoCount items = {this.props.items} />
                <ul className="filters">
                    <li>
                        <Link to="/" className = {className_all} >All</Link>
                    </li>
                    <li>
                        <Link to="/active" className = {className_active} >Active</Link>
                    </li>
                    <li>
                        <Link to="/completed" className = {className_completed} >Completed</Link>
                    </li>


                </ul>
                {completedExists?<TodoClearCompleted />:''}
            </footer>
        );
    }
}

export default TodoFooter;
