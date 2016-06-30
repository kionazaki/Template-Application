import TestUtils from "react-addons-test-utils";
import React from "react";
import TodoToggleAll from "./TodoToggleAll";


describe("TodoToggleAll", () => {
    /*
    it("должен быть CHECKBOX", () => {
        const tree = TestUtils.renderIntoDocument(<TodoToggleAll toggleAll = {false} />);
        const heading = TestUtils.findRenderedDOMComponentWithClass(tree, "toggle-all");
        expect(heading.type).toEqual('checkbox');

        //expect(heading.textContent).toEqual("100");
    });

    it("не должен быть выбран", () => {
        const tree = TestUtils.renderIntoDocument(<TodoToggleAll toggleAll = {false} />);
        const heading = TestUtils.findRenderedDOMComponentWithClass(tree, "toggle-all");
        expect(heading.checked).toEqual(false);

        //expect(heading.textContent).toEqual("100");
    });

    it("При клике становится выбранным", () => {
        const increment = jasmine.createSpy();
        const tree = TestUtils.renderIntoDocument(<TodoToggleAll toggleAll = {false}  />);
        const heading = TestUtils.findRenderedDOMComponentWithClass(tree, "toggle-all");
        TestUtils.Simulate.click(heading);
        expect(heading.checked).toEqual(true);

        //expect(heading.textContent).toEqual("100");
    });


    it("increments by 1 on \"+\" button click", () => {
        const increment = jasmine.createSpy();
        const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={increment} decrement={() => {}} />);
        const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--i1");
        TestUtils.Simulate.click(button);
        expect(increment).toHaveBeenCalledWith(1);
    });

    it("increments by 10 on \"+10\" button click", () => {
        const increment = jasmine.createSpy();
        const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={increment} decrement={() => {}} />);
        const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--i10");
        TestUtils.Simulate.click(button);
        expect(increment).toHaveBeenCalledWith(10);
    });

    it("decrements by 1 on \"+\" button click", () => {
        const decrement = jasmine.createSpy();
        const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={() => {}} decrement={decrement} />);
        const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--d1");
        TestUtils.Simulate.click(button);
        expect(decrement).toHaveBeenCalledWith(1);
    });

    it("decrements by 10 on \"+10\" button click", () => {
        const decrement = jasmine.createSpy();
        const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={() => {}} decrement={decrement} />);
        const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--d10");
        TestUtils.Simulate.click(button);
        expect(decrement).toHaveBeenCalledWith(10);
    });

    it("has counter className", () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Counter counter={10} increment={() => {}} decrement={() => {}} />);
        const result = renderer.getRenderOutput();
        expect(result.props.className).toEqual("counter");
    });

    it("has h1.counter__title with counter value", () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Counter counter={10} increment={() => {}} decrement={() => {}} />);
        const result = renderer.getRenderOutput();
        expect(result.props.children[0]).toEqual(<h1 className="counter__title">{10}</h1>);
    });
*/
});




/*
import TodoToggleAllFunc from "app/components/TodoToggleAll/TodoToggleAllFunc";

it("Должен умножать себя на себя", () => {
    expect(TodoToggleAllFunc.xxx(4)).toEqual(16);
});


    */