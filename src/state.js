import Rx from "rxjs";
import createState from "app/rx-state/createState";
import CounterReducer$ from "app/reducers/CounterReducer";
import Counter2Reducer$ from "app/reducers/Counter2Reducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$,
  Counter2Reducer$
);

const initialState$ = Rx.Observable.of({ counter: 0, counter2: 0 });

export default createState(reducer$, initialState$);
