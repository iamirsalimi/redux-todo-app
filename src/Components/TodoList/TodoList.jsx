import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
export default function TodoList() {
    const todos = useSelector(state => state)

    return (
        <>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </>
    );
}

// function mapStateToProps(state) {
//     console.log(state)
//     return { todos: state };
// }

// export default connect(mapStateToProps)(TodoList);
