import TestUtils from "react-addons-test-utils";
//import ExpandedTestUtils from "expanded-react-test-utils";
import TestUtilsAdditions from "react-testutils-additions";

import React    from "react";
//import ReactDOM from "react-dom";
import App from "app/components/App/App";
//import state$ from "app/state";
import currentState from "app/rx-state/currentState";




import Rx from "rxjs";
import reducer$ from "app/rx-state/reducer";
import automation from "app/rx-state/automation";
import createState from "app/rx-state/createState";
import templateState from "app/rx-state/templateState";

import TodoClearCompletedFunc from "app/components/TodoClearCompleted/TodoClearCompletedFunc";




const templateState2 = {
    todos: {
        toggleAll: false,
        newTodoValue: '',
        items: [
            {label: 'test', checked: false, restoreLabel: ''},
            {label: 'test2', checked: true, restoreLabel: ''}
        ]
    }
};




// Создание потока состояния
const initialState$ = Rx.Observable.of(templateState);
var state$ = automation(createState(reducer$, initialState$));


// Обнуляем STATE по шаблону
localStorage.setItem('state', JSON.stringify(currentState));

// Рендерим весь App с самого корня
const tree = TestUtils.renderIntoDocument(<App />);

describe("App", () => {

    it("Список пуст, компонент TodoHeader должен существовать", () => {
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "new-todo");
        expect(elems.length).toEqual(1);
    });

    it("Список пуст, компонент TodoMain не должен существовать", () => {
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "main");
        expect(elems.length).toEqual(0);
    });

    it("Список пуст, компонент TodoFooter не должен существовать", () => {
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "footer");
        expect(elems.length).toEqual(0);
    });

    it("TodoHeader: при вводе текста в input должен меняться его атрибут value", () => {
        const node = TestUtils.findRenderedDOMComponentWithClass(tree, "new-todo");
        node.value = 'test value';
        TestUtils.Simulate.change(node);
        expect(node.value).toEqual('test value');
    });

    it("TodoHeader: при нажатии на Enter добавляется новая запись в список", () => {
        const newTodo = TestUtils.findRenderedDOMComponentWithClass(tree, "new-todo");
        TestUtils.Simulate.keyDown(newTodo, {key: "Enter", target: {value: "test value"} });
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "view");
        expect(elems.length).toEqual(1);
    });

    it("Список не пуст, компонент TodoMain должен существовать", () => {
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "main");
        expect(elems.length).toEqual(1);
    });

    it("Список не пуст, компонент TodoFooter должен существовать", () => {
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "footer");
        expect(elems.length).toEqual(1);
    });

    it("TodoItem: новая запись появляется в статусе Active", () => {
        const elems = TestUtils.findRenderedDOMComponentWithClass(tree, "toggle");
        expect(elems.checked).toEqual(false);
    });

    it("TodoItem: новая запись не в состоянии редактирования", () => {
        const node = TestUtilsAdditions.find(tree, ".todo-list li");
        expect(node[0].className).toEqual('');
    });

    it("TodoItem: после двойного клика запись в состоянии редактирования", () => {
        const node = TestUtilsAdditions.find(tree, ".todo-list li")[0];
        TestUtils.Simulate.doubleClick(node);
        expect(node.className).toEqual('editing');
    });

    it("TodoItem: при вводе текста в input должен меняться его атрибут value", () => {
        const node = TestUtilsAdditions.find(tree, ".edit")[0];
        node.value = 'edited test value';
        TestUtils.Simulate.change(node);
        expect(node.value).toEqual('edited test value');
    });

    it("TodoItem: при нажатии Esc предыдущее значение не должно поменяться", () => {
        const node = TestUtilsAdditions.find(tree, ".edit")[0];
        node.value = 'edited test value';
        TestUtils.Simulate.change(node);
        TestUtils.Simulate.keyDown(node, {key: "Escape"});
        const node_label = TestUtilsAdditions.find(tree, ".todo-list label")[0];
        expect(node_label.textContent).toEqual('test value');
    });

    it("TodoItem: при нажатии Enter запись должна обновитьс на новое значение", () => {
        const node_li = TestUtilsAdditions.find(tree, ".todo-list li")[0];
        TestUtils.Simulate.doubleClick(node_li);
        const node_edit = TestUtilsAdditions.find(tree, ".edit")[0];
        node_edit.value = '4th edited test value';
        TestUtils.Simulate.change(node_edit);
        TestUtils.Simulate.keyDown(node_edit, {key: "Enter" });
        const node_label = TestUtilsAdditions.find(tree, ".todo-list label")[0];
        expect(node_label.textContent).toEqual('4th edited test value');
    });

    it("TodoItem: после нажатия Enter запись не в состоянии редактирования", () => {
        const node = TestUtilsAdditions.find(tree, ".todo-list li")[0];
        expect(node.className).toEqual('');
    });

    it("TodoItem: при нажатии на checkbox класс записи должен поменяться на completed", () => {
        const node_checkbox = TestUtilsAdditions.find(tree, ".todo-list  .toggle")[0];
        TestUtils.Simulate.change(node_checkbox);
        const node_li = TestUtilsAdditions.find(tree, ".todo-list li")[0];
        expect(node_li.className).toEqual('completed');
    });

    it("TodoItem: повторном нажатии на checkbox класс записи должен вернуться на active", () => {
        const node_checkbox = TestUtilsAdditions.find(tree, ".todo-list  .toggle")[0];
        TestUtils.Simulate.change(node_checkbox);
        const node_li = TestUtilsAdditions.find(tree, ".todo-list li")[0];
        expect(node_li.className).toEqual('');
    });



});

