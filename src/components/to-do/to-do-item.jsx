const ToDoItem = ({item}) => {
    let completeBtnClass = '';
    let completeTextClass = '';

    if (item.isCompleted) {
        completeBtnClass = 'to-do__btn--completed';
        completeTextClass = 'to-do__text--completed';
    };

    return (
        <li className="to-do">
            <button className={`to-do__btn to-do__btn--check ${completeBtnClass}`}>
                {item.isCompleted ? <img src="../images/icon-check.svg" alt=""/> : null}
            </button>
            <p className={`to-do__text ${completeTextClass}`}>{item.text}</p>
            <button className="to-do__btn to-do__btn--delete">
                <img src="../images/icon-cross.svg" alt=""/>
            </button>
        </li>
    );
};

export default ToDoItem;