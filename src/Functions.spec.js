import TodoHeaderFunc from "app/components/TodoHeader/TodoHeaderFunc";
import templateState from "app/rx-state/templateState";
import handleStateForTest from "app/library/handleStateForTest";

var tSet;

describe("Functions", () => {

    it("TodoHeaderFunc.setNewTodo()", () => {
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
        expect(tSet.result).toBeTruthy();
    });


    it("TodoHeaderFunc.addNewItem()", () => {
        tSet.func = TodoHeaderFunc.addNewItem;
        tSet.pars = {
            target:{
                value: 'Hallo world'
            }
        };
        tSet.expectedResult = {
            todos: {
                newTodoValue: '',
                items: [
                    {
                        label: 'Hallo world',
                        checked: false,
                        restoreLabel: ''
                    }
                ]
            }
        };
        tSet = handleStateForTest.getResult(tSet);
        expect(tSet.result ).toBeTruthy();
    });
});