import {TodoCard} from "./TodoCard.jsx";
import PropTypes from "prop-types";

export const TodoList = (props) => {
    const { todos } = props


    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props}  key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
    </ul>
    )
}

