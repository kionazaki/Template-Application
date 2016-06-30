import templateState from "app/rx-state/templateState";
//localStorage.clear();

const localState = JSON.parse( localStorage.getItem('state')) || templateState;

export default localState ;
