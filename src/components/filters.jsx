const Filters = () => {
    return (
        <div className="to-do to-do--filters main__item">
            <button className="to-do__action to-do__action--filter">All</button>
            <button className="to-do__action to-do__action--filter">Active</button>
            <button className="to-do__action to-do__action--filter">Completed</button>
        </div>
    );
};

export default Filters;