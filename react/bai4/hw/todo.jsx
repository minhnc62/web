
const Todo = () =>{

    //tạo id ngẫu nhiên không bị trùng lặp
    //id có số tối thiều là 1000, id luôn chứa 4 số
    const getId = () => Math.floor(Math.random() * 9000) + 1000;

    const [filter,setFilter] = React.useState("all");
    
    const [todos,setTodos] = React.useState([
        // todo mẫu
        {
            id : getId(),
            text : "Học react",
            completed : true,
        },
        {
            id : getId(),
            text : "Học component react",
            completed : true,
        },
        {
            id : getId(),
            text : "Học state react",
            completed : false,
        },
    ])

    //cập nhập filter
    const filterBy = (value)=>{
        setFilter({
            filter:value,
        });

    }


    //cập nhập trạng thái completed thông qua id
    const completeTask = (id) =>{
        // tìm id
        let index = todos.findIndex((item)=> item.id == id);

        if(index !== -1){
            // sao chép tất cả các thuộc tính trong đối tượng có id = index ra đối tượng mới
            const todo = {...todos[index]};
            //Thay đổi giá trị conpleted
            todo.completed = !todo.completed;
            // sao chép tất cả tem trong todos ra một mảng mới 
            //const newTodos = this.state.todos.slice(0,index)
            const newTodo = [...todos];
            
            newTodo[index] = todo;
            // khởi tạo lại state
            setTodos({
                todos : newTodo, 
            });

        }
    }
    //tạo task mới
    const createTask = (text) =>{
        const todo = {
            id : getId(),
            text : text,
            completed : false,
        };
        
        const newTodo = [...todos];
        newTodo.push(todo);

        setTodos({
            todos : newTodo, 
        });
    }


    

        //lọc
        const currentOption = filter;
        const todo = todos;
        
        let filterTodo = [];
        switch (currentOption) {
            case "no-completed" :
                filterTodo = todo.filter((item)=> !item.completed);
                break;
            
            case "completed" :
                filterTodo = todo.filter((item)=> item.completed);
                break;
            
            default :
                filterTodo = todo;
        }
        
        return(
            <div className="todos">
                <div className="container">
                    <h2 className="todos-heading"> Những việc cần làm</h2>
                {/* form */}
                <Form createTask={createTask}/>
                {/* filter */}
                <Filter currentOption={filter}
                        filterBy={filterBy}
                />
                {/* List */}
                {/* truyền state vào list */}
                <List todos={filterTodo}
                      completeTask={completeTask}  //truyền props completed xuống List      
                />
                </div>
            </div>
            
        );
}







// class Todo extends React.Component{

//     //tạo id ngẫu nhiên không bị trùng lặp
//     //id có số tối thiều là 1000, id luôn chứa 4 số
//     getId = () => Math.floor(Math.random() * 9000) + 1000;

//     state = {
//         filter: "all",
//         todos: [
//             // todo mẫu
//             {
//                 id : this.getId(),
//                 text : "Học react",
//                 completed : true,
//             },
//             {
//                 id : this.getId(),
//                 text : "Học component react",
//                 completed : true,
//             },
//             {
//                 id : this.getId(),
//                 text : "Học state react",
//                 completed : false,
//             },
//         ],
//     }
//     //cập nhập filter
//     filterBy = (value)=>{
//         this.setState({
//             filter:value,
//         });

//     }


//     //cập nhập trạng thái completed thông qua id
//     completeTask = (id) =>{
//         // tìm id
//         let index = this.state.todos.findIndex((item)=> item.id == id);

//         if(index !== -1){
//             // sao chép tất cả các thuộc tính trong đối tượng có id = index ra đối tượng mới
//             const todo = {...this.state.todos[index]};
//             //Thay đổi giá trị conpleted
//             todo.completed = !todo.completed;
//             // sao chép tất cả tem trong todos ra một mảng mới 
//             //const newTodos = this.state.todos.slice(0,index)
//             const newTodo = [...this.state.todos];
            
//             newTodo[index] = todo;
//             // khởi tạo lại state
//             this.setState({
//                 todos : newTodo, 
//             });

//         }
//     }
//     //tạo task mới
//     createTask = (text) =>{
//         const todo = {
//             id : this.getId(),
//             text : text,
//             completed : false,
//         };
//         const newTodo = [...this.state.todos];
//         newTodo.push(todo);

//         this.setState({
//             todos : newTodo, 
//         });
//     }


//     render(){

//         //lọc
//         const currentOption = this.state.filter;
//         const todos = this.state.todos;
//         let filterTodo = [];
//         switch (currentOption) {
//             case "no-completed" :
//                 filterTodo = todos.filter((item)=> !item.completed);
//                 break;
            
//             case "completed" :
//                 filterTodo = todos.filter((item)=> item.completed);
//                 break;
            
//             default :
//                 filterTodo = todos;
//         }
//         return(
//             <div className="todos">
//                 <div className="container">
//                     <h2 className="todos-heading"> Những việc cần làm</h2>
//                 {/* form */}
//                 <Form createTask={this.createTask}/>
//                 {/* filter */}
//                 <Filter currentOption={this.state.filter}
//                         filterBy={this.filterBy}
//                 />
//                 {/* List */}
//                 {/* truyền state vào list */}
//                 <List todos={filterTodo}
//                       completeTask={this.completeTask}  //truyền props completed xuống List      
//                 />
//                 </div>
//             </div>
            
//         );
//     }
// }