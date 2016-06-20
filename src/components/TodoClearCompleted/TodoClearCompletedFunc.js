import TodoItemFunc from "app/components/TodoItem/TodoItemFunc";

var TodoClearCompleted = {

    clearCompleted: function(state){
        state.todos.items.forEach((item, index)=>{
            if (item.checked){
                TodoItemFunc.destroyItem(state, {index: index})
            }
        });
        return state;
    }
};



export default TodoClearCompleted;
