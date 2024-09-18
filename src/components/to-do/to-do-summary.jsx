const ToDoSummary = ({length}) => {
    return (
        <div className="to-do">
            <p className="to-do__text to-do__summary">{length} items left</p>
            <button className="to-do__action">Clear Completed</button>
        </div>
    )
};

export default ToDoSummary;