import React, {useState, useEffect} from 'react';

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
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem('local-todo'));
        if (!localTodos) {
            localStorage.setItem('local-todo', JSON.stringify(initialTodos));
            setTodos(initialTodos);
        } else {
            setTodos(localTodos);
        };
    }, []);

    const addTodo = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: Math.random().toString(),
        };

        const newTodos = [...todos];
        newTodos.push(newTodo);
        setTodos(newTodos);
        localStorage.setItem('local-todo', JSON.stringify(newTodos));
    };

    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.isCompleted = true;
            };
        });
        setTodos(newTodos);
        localStorage.setItem('local-todo', JSON.stringify(newTodos));
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((item) => {
            return item.id !== id;
        });
        setTodos(newTodos);
        localStorage.setItem('local-todo', JSON.stringify(newTodos));
    };

    return (
        <ToDoContext.Provider value={{todos,addTodo, completeTodo, deleteTodo}}>{props.children}</ToDoContext.Provider>
    );
};

export {ToDoContext, ContextProvider};