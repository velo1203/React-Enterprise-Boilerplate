import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { StyledTodoPage, StyledTodoPageHeader } from "./styledTodoPage";
import { Input } from "../../components/common/input";
import { Button } from "../../components/common/button";
import { addTodo } from "../../features/todo/todoSlice";
import React, { useState } from "react";

function Todo() {
    const [Text, setText] = useState("");
    const todo = useSelector((state: RootState) => {
        return state.todo.todos;
    });
    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            addTodo({
                id: Date.now().toString(),
                text: Text,
                completed: false,
            })
        );
        setText("");
    };
    return (
        <StyledTodoPage>
            <StyledTodoPageHeader>
                <h1>Todopage</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Add todo"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <Button>Add</Button>
                </form>
            </StyledTodoPageHeader>
            <p>
                {todo.map((todo) => (
                    <div key={todo.id}>
                        <input type="checkbox" />
                        <span>{todo.text}</span>
                        <button>Delete</button>
                    </div>
                ))}
            </p>
        </StyledTodoPage>
    );
}

export default Todo;
