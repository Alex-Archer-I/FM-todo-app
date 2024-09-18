import React, {useState} from 'react';

const ToDoContext = React.createContext();

const initialTodos = [
    {
        text: 'Do something important.',
        isCompleted: true,
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

    return (
        <ToDoContext.Provider value={{todos}}>{props.children}</ToDoContext.Provider>
    );
};

export {ToDoContext, ContextProvider};