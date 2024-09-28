import {useState, useContext} from 'react';

import {ToDoContext} from './store/context';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const {addTodo} = useContext(ToDoContext);

    const changeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form className="main__item to-do form" onSubmit={submitHandler}>
            <div className="to-do__btn to-do__btn--round to-do__btn--check"></div>
            <input type="text" className="to-do--input form__input" placeholder="Create a new todo..." value={inputValue} onChange={changeHandler}/>
        </form>
    );
};

export default Form;