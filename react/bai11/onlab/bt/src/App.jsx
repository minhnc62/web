import { useDispatch, useSelector } from "react-redux"

import './App.css'
import { useTodo, add, edit, remove, clear } from "./redux/todoSlice";
import { useState } from "react";
import ProductList from "./ProductList";

function App() {

  const dispatch = useDispatch();
  const todos = useSelector(useTodo);
  const [editing, setEditing] = useState(null);
  const [todo, setTodo] = useState("");

  

  

  const handleSubmit = (e) => {
    e.preventDefault();

    

    if (todo.trim().length == 0)
      return;

    if(editing){
      dispatch(edit({id: editing, content: todo} ))
      setEditing(null);
    }else {
      dispatch(add(todo));
    }

    setTodo(" ");
  }


  return (
    <div className="App">
      <h1 className="header"> Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="dien cong viec" />
        {
          editing ? (
            <>
            <button >edit</button>
            <button onClick={() =>{
              setEditing(null);
              setTodo("");
            }}>cancel edit</button></>
            
          ) : (
            <button >add</button>
          )
        }
      </form>

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
      <button className="btn-clear" onClick={() => dispatch(clear())}>xoa tat ca</button>

        <ProductList/>
    </div>
  )
}

export default App
