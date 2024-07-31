const ToDoItem = ({item}) => {
    return (
        <li className="to-do">
            <button>
                {item.isChecked ? <p></p> : null}
            </button>
            <p>{item.text}</p>
            <button></button>
        </li>
    );
};

export default ToDoItem;