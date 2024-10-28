import PropTypes from "prop-types";

export const TodoInput = (props) => {
    // eslint-disable-next-line react/prop-types
    const {handleAddTodos, todoValue, setTodoValue} = props;
    // const handleKeyDown = (e) => {
    //     if (e.key === "Enter") {
    //         handleAddTodos(todoValue);
    //         setTodoValue("")
    //     }
    // }
    return (
        <header>
            <input value={todoValue} type="text" onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo... "

                   // onKeyDown={handleKeyDown}
            />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue("")
            }}>Add
            </button>
        </header>
    )
}

TodoInput.propTypes = {
    handleAddTodos: PropTypes.func.isRequired
};