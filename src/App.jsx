import {TodoInput} from "./components/TodoInput.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {useState, useEffect} from "react";


function App() {

    // define stateful variable
    const [todos, setTodos] = useState([]);
    const [todoValue, setTodoValue] = useState('')

    const persistData = (newList) => {
        localStorage.setItem('todos', JSON.stringify({ todos: newList})
        )
    }
    const handleAddTodos = (newTodo) => {
        // create a new array
     const newTodoList = [...todos, newTodo]
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    const handleDeleteTodo =  (index) => {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index
        })
        persistData(newTodoList)
        setTodos(newTodoList)
    }

    const handleEditTodo =  (index) => {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleAddTodos(index)
    }

    useEffect(() => {
        if (!localStorage) {
            return;
        }

        let localTodos = localStorage.getItem('todos');
        console.log('todos: ' + localTodos);
        if (!localTodos) {
            return;
        }

        localTodos = JSON.parse(localTodos).todos; // Access the correct key here
        setTodos(localTodos);
    }, []);

  return (
    <main>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <TodoList handleEditTodo={handleEditTodo}
                  handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </main>
  )
}

export default App
