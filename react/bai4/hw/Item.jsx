// tao func item
const Item = ({completeTask,todo}) =>{

    const handleChange = () =>{
        //gọi hàm completed và truyền id của item hiện tại
        completeTask(todo.id)
    }

    return <li className="todo-item">
        <input className="item" type="checkbox" 
        checked={todo.completed}
        onChange={handleChange}// thêm sự kiện
        />
        {todo.text}
    </li>;
}