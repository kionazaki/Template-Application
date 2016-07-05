import templateState from "app/rx-state/templateState";
import handleStateForTest from "app/library/handleStateForTest";
import TodoHeaderFunc from "app/components/TodoHeader/TodoHeaderFunc";
import TodoItemFunc from "app/components/TodoItem/TodoItemFunc";
import TodoToggleAllFunc from "app/components/TodoToggleAll/TodoToggleAllFunc";
import TodoClearCompletedFunc from "app/components/TodoClearCompleted/TodoClearCompletedFunc";

var tSet, result;

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
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoHeaderFunc.addNewItem()", () => {
        tSet.func = TodoHeaderFunc.addNewItem;
        tSet.pars = {
            target: {
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
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoItemFunc.changeItemCheckbox()", () => {
        tSet.func = TodoItemFunc.changeItemCheckbox;
        tSet.pars = {index: 0};
        tSet.expectedResult = {
            todos: {
                items: [
                    {
                        checked: true
                    }
                ]
            }
        };
        tSet = handleStateForTest.getResult(tSet);
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoItemFunc.startingItemEditing()", () => {
        tSet.func = TodoItemFunc.startingItemEditing;
        tSet.pars = {
            index: 0,
            event: {
                target: {
                    className: 'something'
                }
            }
        };
        tSet.expectedResult = {
            todos: {
                items: [
                    {restoreLabel: 'Hallo world'}
                ]
            }
        };
        tSet = handleStateForTest.getResult(tSet);
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoItemFunc.setItemLabel()", () => {
        tSet.func = TodoItemFunc.setItemLabel;
        tSet.pars = {index: 0, label: ''};
        tSet.expectedResult = {
            todos: {
                items: [
                    {label: ''}
                ]
            }
        };
        tSet = handleStateForTest.getResult(tSet);
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoItemFunc.stoppingItemEditing()_", () => {
        tSet.func = TodoItemFunc.stoppingItemEditing;
        tSet.func = tSet.func.bind(TodoItemFunc);
        tSet.pars = {index: 0};
        tSet.expectedResult = {
            todos: {
                items: [
                    '__deleted'
                ]
            }
        };
        tSet = handleStateForTest.getResult(tSet);
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoItemFunc.itemKeyDown(ENTER)", () => {
        result = true;
        if (String(result) === 'true') {
            tSet.func = TodoHeaderFunc.addNewItem;
            tSet.func = tSet.func.bind(TodoHeaderFunc);
            tSet.pars = {target: {value: 'Hallo world 2'}};
            tSet.expectedResult = {
                todos: {
                    items: ['__deleted', {
                        checked: false,
                        label: "Hallo world 2",
                        restoreLabel: ""
                    }]
                }
            };
            tSet = handleStateForTest.getResult(tSet);
            result = tSet.result;
        }
        if (String(result) === 'true') {
            tSet.func = TodoHeaderFunc.addNewItem;
            tSet.func = tSet.func.bind(TodoHeaderFunc);
            tSet.pars = {target: {value: 'Hallo world 3'}};
            tSet.expectedResult = {
                todos: {
                    items: [
                        '__deleted',
                        null,
                        {checked: false, label: "Hallo world 3", restoreLabel: ""}
                    ]
                }
            };
            tSet = handleStateForTest.getResult(tSet);
            result = tSet.result;
        }
        if (String(result) === 'true') {
            tSet.func = TodoItemFunc.startingItemEditing;
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.pars = {index: 1, event: {target: {className: 'something'}}};
            tSet.expectedResult = {todos: {items: ["__deleted", {"restoreLabel": "Hallo world 2"}]}};
            tSet = handleStateForTest.getResult(tSet);
            result = tSet.result;
        }
        if (String(result) === 'true') {
            tSet.func = TodoItemFunc.setItemLabel;
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.pars = {index: 1, label: 'Some Hallo X'};
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.expectedResult = {todos: {items: ["__deleted", {label: "Some Hallo X"}]}};
            tSet = handleStateForTest.getResult(tSet);
            result = tSet.result;
        }
        if (String(result) === 'true') {
            tSet.func = TodoItemFunc.itemKeyDown;
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.pars = {index: 1, key: 'Enter'};
            tSet.expectedResult = {todos: {items: ['__deleted', {restoreLabel: ""}]}};
            tSet = handleStateForTest.getResult(tSet);
        }
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoItemFunc.itemKeyDown(ESCAPE)", () => {
        result = true;
        if (String(result) === 'true') {
            tSet.func = TodoItemFunc.startingItemEditing;
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.pars = {index: 1, event: {target: {className: 'something'}}};
            tSet.expectedResult = {todos: {items: ["__deleted", {"restoreLabel": "Some Hallo X"}]}};
            tSet = handleStateForTest.getResult(tSet);
            result = tSet.result;
        }
        if (String(result) === 'true') {
            tSet.func = TodoItemFunc.setItemLabel;
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.pars = {index: 1, label: 'Some Hallo XY'};
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.expectedResult = {todos: {items: ["__deleted", {label: "Some Hallo XY"}]}};
            tSet = handleStateForTest.getResult(tSet);
            result = tSet.result;
        }
        if (String(result) === 'true') {
            tSet.func = TodoItemFunc.itemKeyDown;
            tSet.func = tSet.func.bind(TodoItemFunc);
            tSet.pars = {index: 1, key: 'Escape'};
            tSet.expectedResult = {todos: {items: ['__deleted', {label: "Some Hallo X", restoreLabel: ""}]}};
            tSet = handleStateForTest.getResult(tSet);
        }
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoItemFunc.changeItemCheckbox()", () => {
        tSet.func = TodoItemFunc.changeItemCheckbox;
        tSet.func = tSet.func.bind(TodoItemFunc);
        tSet.pars = {index: 2};
        tSet.expectedResult = {todos: {items: ['__deleted', null, {checked: true}]}};
        tSet = handleStateForTest.getResult(tSet);
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoToggleAllFunc.toggleAll()", () => {
        tSet.func = TodoToggleAllFunc.toggleAll;
        tSet.func = tSet.func.bind(TodoToggleAllFunc);
        tSet.expectedResult = {todos: {items: ['__deleted', {checked: true}]}};
        tSet = handleStateForTest.getResult(tSet);
        expect(String(tSet.result)).toEqual('true');
    });

    it("TodoClearCompletedFunc.clearCompleted()", () => {
        tSet.func = TodoClearCompletedFunc.clearCompleted;
        tSet.func = tSet.func.bind(TodoClearCompletedFunc);
        tSet.expectedResult = {todos: {items: ['__deleted', '__deleted', '__deleted']}};
        tSet = handleStateForTest.getResult(tSet);
        expect(String(tSet.result)).toEqual('true');
    });
});