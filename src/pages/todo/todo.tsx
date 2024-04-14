import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { StyledTodoPage, StyledTodoPageHeader } from "./styledTodoPage";
import { Input } from "../../components/common/input";
import { Button } from "../../components/common/button";

function Todo() {
    const todo = useSelector((state: RootState) => {
        return state.todo.todos;
    });
    const dispatch = useDispatch();
    return (
        <StyledTodoPage>
            <StyledTodoPageHeader>
                <h1>Todopage</h1>
                <div>
                    <Input placeholder="Add todo" />
                    <Button>Add</Button>
                </div>
            </StyledTodoPageHeader>
        </StyledTodoPage>
    );
}

export default Todo;
