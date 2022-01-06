const List = (props) => {
    return (<ul className="todo-text">
        {props.todos.map(item =>
             <Item 
             key={item.id} 
             todo={item}//truyền cả obj xuống phần item bằng props là todo
             completeTask={props.completeTask}// truyền xuống cho item
             />)}
    </ul>

    );
}