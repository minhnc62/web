// tao func item
const Item = (props) =>{

    const handleChange = () =>{
        //gọi hàm completed và truyền id của item hiện tại
        props.completeTask(props.todo.id)
    }

    return <li className="todo-item">
        <input className="item" type="checkbox" 
        checked={props.todo.completed}
        onChange={handleChange}// thêm sự kiện
        />
        {props.todo.text}
    </li>;
}