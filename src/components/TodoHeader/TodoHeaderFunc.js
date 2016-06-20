var sendCommand = {

    setNewTodo: function (state, pars){
        state.todos.newTodoValue = pars.newTodoValue;
        return state;
    },

    addNewItem: function (state, pars){
        if (pars.key === "Enter" && pars.target.value !== '' ){
            const item = {
                label: pars.target.value,
                checked: false,
                restoreLabel: ''};

            state.todos.items.push(item);
            state.todos.newTodoValue = '';
        }
        return state;
    }

    
};



export default sendCommand;