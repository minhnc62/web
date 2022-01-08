const List = ({todos,completeTask}) => {
  return (<ul className="todo-text">
      {todos.map(item =>
           <Item 
           key={item.id} 
           todo={item}//truyền cả obj xuống phần item bằng props là todo
           completeTask={completeTask}// truyền xuống cho item
           />)}
  </ul>

  );
}