import Rx from "rxjs";
import todoReducer$ from "app/reducers/todoReducer";

// Здесь в перспективе будут собираться reducer-ы всех компонентов
const reducer$ = Rx.Observable.merge(
    todoReducer$
);

export default reducer$;