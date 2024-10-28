
export const TodoInput = (props) => {
    // eslint-disable-next-line react/prop-types
    const {handleAddTodos, todoValue, setTodoValue} = props;
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTodos(todoValue);
            setTodoValue("")
        }
    }
    return (
        <>
            <h1 className="title"> Todo App</h1>
        <header>

            <input value={todoValue} type="text" onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo... "

                   onKeyDown={handleKeyDown}
            />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue("")
            }}>Add
            </button>
        </header>

        </>
    )
}

