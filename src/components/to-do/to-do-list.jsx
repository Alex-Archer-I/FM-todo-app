import {useContext} from 'react';

import ToDoItem from './to-do-item';
import ToDoSummary from './to-do-summary';

import {ToDoContext} from '../store/context';

const ToDoList = () => {
    const {todos} = useContext(ToDoContext);

    const content = todos.map(item => {
        return <ToDoItem item={item} key={item.id}/>
    });

    return (
        <ul className="main__item">
            {content}
            <ToDoSummary/>
        </ul>
    );
};

export default ToDoList;