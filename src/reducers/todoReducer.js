import Rx from "rxjs";
import TodoItemFunc from "app/components/TodoItem/TodoItemFunc";
import TodoToggleAllFunc from "app/components/TodoToggleAll/TodoToggleAllFunc";
import dispatcher$ from "app/dispatcher";

const todoReducer$ = dispatcher$
    .map(command => {
        var pars = command.pars;
        switch (command.action) {
            case 'TodoItem.changeItemCheckbox':
                return state => {return TodoItemFunc.changeItemCheckbox(state, pars)};
            case 'TodoItem.destroyItem':
                return state => {return TodoItemFunc.destroyItem(state, pars)};
            case 'TodoItem.startingItemEditing':
                return state => {return TodoItemFunc.startingItemEditing(state, pars)};
            case 'TodoItem.stoppingItemEditing':
                return state => {return TodoItemFunc.stoppingItemEditing(state, pars)};
            case 'TodoItem.setItemLabel':
                return state => {return TodoItemFunc.setItemLabel(state, pars)};
            case 'TodoItem.itemKeyDown':
                return state => {return TodoItemFunc.itemKeyDown(state, pars)};
            case 'TodoToggleAll.toggleAll':
                return state => {return TodoToggleAllFunc.toggleAll(state)};

        }
    });

export default todoReducer$;