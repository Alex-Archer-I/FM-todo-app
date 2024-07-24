import {useContext} from 'react';

import ToDoItem from './to-do-item';

import {ToDoContext} from '../store/context';

const ToDoList = () => {
    const {todos} = useContext(ToDoContext);

    const content = todos.map(item => {
        return <ToDoItem item={item} key={item.id}/>
    });

    return (
        <ul>{content}</ul>
    );
};

export default ToDoList;