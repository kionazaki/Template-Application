import Rx from "rxjs";

const Counter2Actions = {
  increment$: new Rx.Subject,
  decrement$: new Rx.Subject
};

export default Counter2Actions;
