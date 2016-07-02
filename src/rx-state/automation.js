import Rx from "rxjs";
import toggleAll from "app/automations/toggleAll";

function foo(state){
    return state;
}

function automation(state$) {
   return state$
       .map(r=>foo(r))
       .map(r=>toggleAll(r));
}

export default automation;