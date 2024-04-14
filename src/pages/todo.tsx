import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";

function Todo() {
    const todo = useSelector((state: RootState) => {
        return state.todo.todos;
    });
    const dispatch = useDispatch();
    console.log(todo);
    return <h1>Todo</h1>;
}

export default Todo;
