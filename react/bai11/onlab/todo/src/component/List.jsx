import { useDispatch, useSelector } from "react-redux"


import { useTodo, add, edit, remove, clear } from "../redux/todoSlice";
import { useState } from "react";

const List = () => {
    const dispatch = useDispatch();
    const todos = useSelector(useTodo);
    const [editing, setEditing] = useState(null);
    const [todo, setTodo] = useState("");
    return <div className="list">
        <ul className="todo-list">
            {
                todos.map((g) => (
                    <li key={g.id}>{g.content}
                        <button className="btn-delete" onClick={() => dispatch(remove(g.id))} >
                            <i className="bi bi-trash-fill"></i>
                        </button>
                        <button className="btn-edit" onClick={() => {
                            setEditing(g.id);
                            setTodo(g.content);
                        }} >
                            <i className="bi bi-pencil-square"></i>
                        </button>
                    </li>))
            }
        </ul>
    </div>
}
export default List;