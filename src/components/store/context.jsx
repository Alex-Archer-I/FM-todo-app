import React, {useState} from 'react';

const ToDoContext = React.createContext();

const initialTodos = [
    {
        text: 'Do something important.',
        isCompleted: false,
        id: '01',
    },
    {
        text: 'Do something less important.',
        isCompleted: false,
        id: '02',
    },
    {
        text: 'Have fun.',
        isCompleted: true,
        id: '03',
    },
];

const ContextProvider = (props) => {
    const [todos, setTodos] = useState(initialTodos);

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.isCompleted = true;
            };
        });
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((item) => {
            return item.id !== id;
        });
        setTodos(newTodos);
    };

    return (
        <ToDoContext.Provider value={{todos, completeTodo, deleteTodo}}>{props.children}</ToDoContext.Provider>
    );
};

export {ToDoContext, ContextProvider};