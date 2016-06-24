import TodoToggleAllFunc from "app/components/TodoToggleAll/TodoToggleAllFunc";

/*
function xxx(t){
    return t*t;
}
*/


it("Должен умножать себя на себя", () => {
    expect(TodoToggleAllFunc.xxx(4)).toEqual(16);
});
