const ToDoItem = ({item}) => {
    return (
        <li className="to-do">
            <button className="to-do__check">
                {item.isChecked ? <p></p> : null}
            </button>
            <p className="to-do__text">{item.text}</p>
            <button className="to-do__delete"></button>
        </li>
    );
};

export default ToDoItem;