import TodoItemFunc from "app/components/TodoItem/TodoItemFunc";

var TodoToggleAll = {


    toggleAll: function(state) {
        if (state.todos.toggleAll){
            state.todos.items.forEach((item, index)=>{
                if (item.checked){
                    TodoItemFunc.changeItemCheckbox(state, {index: index})
                }
            });
        } else {
            state.todos.items.forEach((item, index)=>{
                if (!item.checked){
                    TodoItemFunc.changeItemCheckbox(state, {index: index})
                }
            });
        }
        return state;
    }



    
};



export default TodoToggleAll;