import Rx from "rxjs";

const TodoListActions = {
  setCheckbox$: new Rx.Subject,
  destroy$: new Rx.Subject,
  startEdit$: new Rx.Subject,
  stopEdit$: new Rx.Subject,
  setLabel$: new Rx.Subject,
  keyFlow$: new Rx.Subject
};

export default TodoListActions;
