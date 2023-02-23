import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});
    const dispatch = useDispatch();
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }

    return (<>
        <h3>Todos</h3>
        <ul className="list-group">
            <li className="list-group-item d-flex gap-3">
                <input
                    onChange={todoChangeHandler}
                    value={todo.do}
                    className="form-control"/>
                <button onClick={createTodoClickHandler}
                        className="btn btn-primary w-25
                          float-end">
                    Create
                </button>
            </li>

            {todos.map((todo, index) => <li className="list-group-item" key={index}>
                <input type="checkbox"
                       checked={todo.done}
                       onChange={() =>
                           toggleTodoDone(todo)}
                       className="me-2"/>

                <button onClick={() =>
                    deleteTodoClickHandler(index)}
                        className="btn btn-danger
                      float-end ms-2">
                    Delete
                </button>
                {todo.do}
            </li>)}
        </ul>
    </>);
};

export default Todos;