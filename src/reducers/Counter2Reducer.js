import Rx from "rxjs";
import Counter2Actions from "app/actions/Counter2Actions";

const Counter2Reducer$ = Rx.Observable.merge(
  Counter2Actions.increment$.map((n = 1) =>
    state => ({ ...state, counter2: state.counter2+n })),

  Counter2Actions.decrement$.map((n = 1) =>
    state => ({ ...state, counter2: state.counter2-n }))
);

export default Counter2Reducer$;
