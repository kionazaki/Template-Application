import TestUtils from "react-addons-test-utils";
import TestUtilsAdditions from "react-testutils-additions";
import React from "react";
import App from "app/components/App/App";

// Рендерим весь App с самого корня
const tree = TestUtils.renderIntoDocument(<App />);

describe("React components", () => {

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

    it("TodoHeader: добавление еще одной записи в список", () => {
        const newTodo = TestUtilsAdditions.find(tree, ".new-todo")[0];
        TestUtils.Simulate.keyDown(newTodo, {key: "Enter", target: {value: "Hallo world"} });
        const elems = TestUtilsAdditions.find(tree, ".view");
        expect(elems.length).toEqual(2);
    });

    it("TodoCount: В счетчике прописано '2 items left'", () => {
        const nodeСount = TestUtilsAdditions.find(tree, ".todo-count")[0];
        expect(nodeСount.textContent).toEqual('2 items left');
    });

    it("Отметить первую запись (checked) и убедиться, что в счетчике прописано '1 items left'", () => {
        const nodeСheckbox = TestUtilsAdditions.find(tree, ".todo-list  .toggle")[0];
        TestUtils.Simulate.change(nodeСheckbox);
        const node_count = TestUtilsAdditions.find(tree, ".todo-count")[0];
        expect(node_count.textContent).toEqual('1 items left');
    });

    it("TodoToggleAll:  ToggleAll.checked = false", () => {
        const nodeToggleAll = TestUtilsAdditions.find(tree, ".toggle-all")[0];
        expect(nodeToggleAll.checked).toBeFalsy();
    });

    it("Отметить вторую запись (checked) и убедиться что ToggleAll.checked = true", () => {
        const nodeСheckbox = TestUtilsAdditions.find(tree, ".todo-list  .toggle")[1];
        TestUtils.Simulate.change(nodeСheckbox);
        const nodeToggleAll = TestUtilsAdditions.find(tree, ".toggle-all")[0];
        expect(nodeToggleAll.checked).toBeTruthy();
    });

    it("Снять отметку с первой записи (checked) и убедиться, что ToggleAll.checked = false", () => {
        const nodeСheckbox = TestUtilsAdditions.find(tree, ".todo-list  .toggle")[0];
        TestUtils.Simulate.change(nodeСheckbox);
        const nodeToggleAll = TestUtilsAdditions.find(tree, ".toggle-all")[0];
        expect(nodeToggleAll.checked).toBeFalsy();
    });

    it("Сделать ToggleAll.checked = true и убедиться, что оба элемента списка стали выбранными", () => {
        const nodeToggleAll = TestUtilsAdditions.find(tree, ".toggle-all")[0];
        TestUtils.Simulate.change(nodeToggleAll);
        const nodeСheckboxs = TestUtilsAdditions.find(tree, ".todo-list  .toggle");
        let result = true;
        nodeСheckboxs.forEach((item)=>{
            result = result && item.checked;
        });
        expect(result).toBeTruthy();
    });

    it("Сделать ToggleAll.checked = false и убедиться, что оба элемента списка стали не выбранными", () => {
        const nodeToggleAll = TestUtilsAdditions.find(tree, ".toggle-all")[0];
        TestUtils.Simulate.change(nodeToggleAll);
        const nodeСheckboxs = TestUtilsAdditions.find(tree, ".todo-list  .toggle");
        let result = false;
        nodeСheckboxs.forEach((item)=>{
            result = result || item.checked;
        });
        expect(result).toBeFalsy();
    });

    it("TodoItem: отредактировать первую запись в пустое значение и убедиться, что она пропадает из списка", () => {
        const nodeLi = TestUtilsAdditions.find(tree, ".todo-list li")[0];
        TestUtils.Simulate.doubleClick(nodeLi);
        const nodeEdit = TestUtilsAdditions.find(tree, ".edit")[0];
        nodeEdit.value = '';
        TestUtils.Simulate.change(nodeEdit);
        TestUtils.Simulate.keyDown(nodeEdit, {key: "Enter" });
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "view");
        expect(elems.length).toEqual(1);
    });

    it("TodoItem: нажать на крестик у оставшейся записи и убедиться, что она пропадает из списка", () => {
        const nodeDestroy = TestUtilsAdditions.find(tree, ".destroy")[0];
        TestUtils.Simulate.click(nodeDestroy);
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "view");
        expect(elems.length).toEqual(0);
    });

    it("Список пуст, компонент TodoMain не должен существовать", () => {
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "main");
        expect(elems.length).toEqual(0);
    });

    it("Список пуст, компонент TodoFooter не должен существовать", () => {
        const elems = TestUtils.scryRenderedDOMComponentsWithClass(tree, "footer");
        expect(elems.length).toEqual(0);
    });

    it("TodoClearCompleted: добавить два новых элемента в список, убедиться, что кнопка 'clear Comleted' не активна", () => {
        const newTodo = TestUtils.findRenderedDOMComponentWithClass(tree, "new-todo");
        TestUtils.Simulate.keyDown(newTodo, {key: "Enter", target: {value: "test value 1"} });
        TestUtils.Simulate.keyDown(newTodo, {key: "Enter", target: {value: "test value 2"} });
        const nodeСlearСompleted = TestUtilsAdditions.find(tree, ".clear-completed");
        expect(nodeСlearСompleted.length).toEqual(0);
    });

    it("TodoClearCompleted: Выбрать первый элемнт (checked), кнопка 'clear Comleted' становится активной", () => {
        const nodeСheckbox = TestUtilsAdditions.find(tree, ".todo-list  .toggle")[0];
        TestUtils.Simulate.change(nodeСheckbox);
        const nodeСlearСompleted = TestUtilsAdditions.find(tree, ".clear-completed");
        expect(nodeСlearСompleted.length).toEqual(1);
    });

    it("TodoClearCompleted: При нажатии на 'clear Comleted' перва запись пропадает, вторая остаётся", () => {
        const nodeСlearСompleted = TestUtilsAdditions.find(tree, ".clear-completed")[0];
        TestUtils.Simulate.click(nodeСlearСompleted);
        const nodeTodoList = TestUtilsAdditions.find(tree, ".todo-list")[0];
        expect(nodeTodoList.textContent).toEqual("test value 2");
    });

});

