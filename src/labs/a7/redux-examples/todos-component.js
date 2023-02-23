import React from "react";
import {useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    return (<>
            <h3>Todos</h3>
            <ul className="list-group">
                {todos.map((todo, index) => <li className="list-group-item" key={index}>
                    {todo.do}
                </li>)}
            </ul>
        </>);
};

export default Todos;