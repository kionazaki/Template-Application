import TodoHeaderFunc from "app/components/TodoHeader/TodoHeaderFunc";
import TodoItemFunc from "app/components/TodoItem/TodoItemFunc";
import TodoToggleAllFunc from "app/components/TodoToggleAll/TodoToggleAllFunc";
import TodoClearCompletedFunc from "app/components/TodoClearCompleted/TodoClearCompletedFunc";


import templateState from "app/rx-state/templateState";
import handleStateForTest from "app/library/handleStateForTest";

function sendToConsole(tSet){
    console.log(String(tSet.func.name));
    console.log(tSet.newState);
    console.log(String(tSet.result));
    console.log('----------------------------------------');
}


function testFunc() {
    var tSet, result;
/*
    tSet = {
        oldState: {},
        newState: templateState,
        func: TodoHeaderFunc.setNewTodo,
        pars: {
            newTodoValue: 'Hallo World'
        },
        expectedResult: {
            todos: {
                newTodoValue: 'Hallo World'
            }
        },
        result: null
    };
    tSet = handleStateForTest.getResult(tSet);
    sendToConsole(tSet);
    */
}

export default testFunc;