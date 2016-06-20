import React from "react";
import TodoHeader from "app/components/TodoHeader/TodoHeader";
import TodoMain from "app/components/TodoMain/TodoMain";
import TodoFooter from "app/components/TodoFooter/TodoFooter";
import state$ from "app/state";
import connect from "app/rx-state/connect";

class TodoApp extends React.Component{
    render(){
        const headerData = {
            newTodoValue: this.props.todos.newTodoValue
        };

        const mainData = {
            toggleAll: this.props.todos.toggleAll,
            items:  this.props.todos.items,
            pathName: this.props.location.pathname
        };

        const footerData = {
            items: this.props.todos.items,
            pathName: this.props.location.pathname
        };

        const count = this.props.todos.items.filter(()=>true).length;
        const itemsExists = this.props.todos.items.some((item)=>!!item.label);

        return (
            <section className="todoapp">
                <TodoHeader {...headerData} />
                {itemsExists?<TodoMain {...mainData} />:'' }
                {itemsExists?<TodoFooter {...footerData} />:'' }
            </section>
        );
    }
}

export default connect(state$)(TodoApp);

