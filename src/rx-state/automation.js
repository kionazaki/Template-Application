import Rx from "rxjs";

function toggleAll(state){
    var toggleAll = true;
    state.todos.items.forEach((item)=>{
        if (!item.checked){
            toggleAll = false;
        }
    });
    state.todos.toggleAll = toggleAll;
    return state;
}

function automation(state$) {
   return state$
       .map(r=>toggleAll(r));
}

export default automation;