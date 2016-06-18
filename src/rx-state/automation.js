import Rx from "rxjs";



function toggleAll(state){
    var _state = state;
    var _toggleAll = true;

    _state.todos.items.forEach((item)=>{
        if (!item.checked){
            _toggleAll = false;
        }
    });

    _state.todos.toggleAll = _toggleAll;



    return _state;
}












function automation(state$) {
   return state$
       .map(r=>toggleAll(r));
}


export default automation;