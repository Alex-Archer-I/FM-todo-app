import {useState, useRef} from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <form className="main__item to-do form">
            <div className="to-do__btn to-do__btn--round to-do__btn--check"></div>
            <input type="text" className="to-do--input form__input" placeholder="Create a new todo..."/>
        </form>
    );
};

export default Form;