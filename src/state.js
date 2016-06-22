import Rx from "rxjs";
import createState from "app/rx-state/createState";
import todoReducer$ from "app/reducers/todoReducer";
import automation from "app/rx-state/automation";
import currentState from "app/rx-state/currentState";

// Здесь в перспективе будут собираться reducer-ы всех компонентов
const reducer$ = Rx.Observable.merge(
  todoReducer$
);

// Создание потока состояния
const initialState$ = Rx.Observable.of(currentState);
var state$ = automation(createState(reducer$, initialState$));

//Сохраняем все текущие состояния в localStorage
state$.debounceTime(500).subscribe(r=>{
    // Очищаем массив от удалённых элементов, т.к. JSON сохраняет их как null.
    // Если этого не сделать, индекс массива будет постоянно наращиваться
    // и все когда-либо удалённые элементы будут продолжать сохраняться в localStorage (как null)
    r.todos.items = r.todos.items.filter(()=>true);
    localStorage.setItem('state', JSON.stringify(r));
});

export default state$;
