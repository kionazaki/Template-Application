import Rx from "rxjs";
import TodoListActions from "app/actions/TodoListActions";

const TodoListReducer$ = Rx.Observable.merge(

    // checked
    TodoListActions.setCheckbox$
        .map(index =>
                state => {
                    let item = state.todos.items[index];
                    item.checked = !item.checked;
                    return state}),
    // destroy
    TodoListActions.destroy$
        .map(index =>
                state => {
                    delete state.todos.items[index];
                    return state}),
    // startEdit
    TodoListActions.startEdit$
        .map(index =>
                state => {
                    let item = state.todos.items[index];
                    item.editMode = true;
                    return state}),
    // stopEdit
    TodoListActions.stopEdit$
        .map(index =>
                state => {
            let item = state.todos.items[index];
            item.editMode = false;
            return state}),

    // setLabel
    TodoListActions.setLabel$
        .map(obj =>
                state => {
            let item = state.todos.items[obj.index];
            item.label = obj.label;
            return state})



);

export default TodoListReducer$;