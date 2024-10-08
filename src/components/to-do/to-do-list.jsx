import {useContext} from 'react';

import ToDoItem from './to-do-item';
import ToDoSummary from './to-do-summary';

import {ToDoContext} from '../store/context';

const ToDoList = () => {
    const {todos, completeTodo, deleteTodo} = useContext(ToDoContext);
    let activeTodos = 0;

    const content = todos.map(item => {
        if (!item.isCompleted) {
            activeTodos++;
        };

        return <ToDoItem item={item} completeTodo={completeTodo} deleteTodo={deleteTodo} key={item.id}/>
    });

    return (
        <ul className="main__item">
            {content}
            <ToDoSummary activeTodos={activeTodos}/>
        </ul>
    );
};

export default ToDoList;