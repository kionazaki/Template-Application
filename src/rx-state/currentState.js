const template = {
    todos: {
        toggleAll: false,
        newTodoValue: '',
        items: [
            //{label: 'test', checked: false, restoreLabel: ''},
        ]
    }
};

const localState = JSON.parse( localStorage.getItem('state'));

export default localState || template;
