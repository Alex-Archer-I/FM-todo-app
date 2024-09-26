const ToDoItem = ({item, completeTodo, deleteTodo}) => {
    let completeBtnClass = '';
    let completeTextClass = '';

    if (item.isCompleted) {
        completeBtnClass = 'to-do__btn--completed';
        completeTextClass = 'to-do__text--completed';
    };

    const completeButtonHandler = () => {
        completeTodo(item.id);
    };

    const deleteButtonHandler = () => {
        deleteTodo(item.id);
    };

    return (
        <li className="to-do">
            <button className={`to-do__btn to-do__btn--round to-do__btn--check ${completeBtnClass}`} onClick={completeButtonHandler}>
                {item.isCompleted ? <img src="../images/icon-check.svg" alt=""/> : null}
            </button>
            <p className={`to-do__text ${completeTextClass}`}>{item.text}</p>
            <button className="to-do__btn to-do__btn--round to-do__btn--delete" onClick={deleteButtonHandler}>
                <img src="../images/icon-cross.svg" alt=""/>
            </button>
        </li>
    );
};

export default ToDoItem;