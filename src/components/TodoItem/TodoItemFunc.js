var sendCommand = {
    changeItemCheckbox: function (state, pars){
        let item = state.todos.items[pars.index];
        item.checked = !item.checked;
        return state;
    },

    destroyItem: function (state, pars){
        delete state.todos.items[pars.index];
        return state;
    },

    startingItemEditing: function(state, pars){
        let item = state.todos.items[pars.index];
        item.restoreLabel = item.label;
        return state;
    },

    stoppingItemEditing: function(state, pars) {
        let item = state.todos.items[pars.index];
        item.restoreLabel = '';
        if (item.label === '') {
            this.destroyItem(state, {index: pars.index});
        }
        return state;
    },

    setItemLabel: function(state, pars) {
        let item = state.todos.items[pars.index];
        item.label = pars.label;
        return state;
    },

    itemKeyDown: function(state, pars) {
        if (pars.key === "Enter") {
            this.stoppingItemEditing(state, {index: pars.index})}
        if (pars.key === "Escape") {
            this.restoreLabel(state, {index: pars.index})}
        return state;
    },

    restoreLabel: function(state, pars) {
         let item = state.todos.items[pars.index];
         item.label = item.restoreLabel;
         this.stoppingItemEditing(state, {index: pars.index});
         return state;
    },

    toggleAll: function(state) {
        if (state.todos.toggleAll){
            state.todos.items.forEach((item, index)=>{
                if (item.checked){
                    this.changeItemCheckbox(state, {index: index})
                }
            });
        } else {
            state.todos.items.forEach((item, index)=>{
                if (!item.checked){
                    this.changeItemCheckbox(state, {index: index})
                }
            });
        }
        return state;
    }



    
};



export default sendCommand;