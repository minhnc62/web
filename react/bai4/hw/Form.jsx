const Form = ({createTask}) =>{

    const [text,setText] = React.useState(" ")
    
    
      const  handleSubmit = (e) =>{
        //khi submit không load lại trang
        e.preventDefault();
        //gọi hàm createTask có đầu vào là text
        
        createTask(text);
        //clear input khi ấn submit
        setText(" ");
    };

   
        return(
            <form className="form" action="" onSubmit={handleSubmit}>
            <input placeholder="Thêm công việc" className="input" type="text"
                   value={text}
                   onChange={(e)=>setText(e.target.value)}    
            />
            <button className="btn-add">Add</button>
            </form>
        );
    
    
};


// class Form extends React.Component{

//     state = {
//         text:"",
//     }
//     // cập nhập lại text
//     handleChange = (e) =>{
//         this.setState({
//             text: e.target.value,
//         })
//     }
//         handleSubmit = (e) =>{
//         //khi submit không load lại trang
//         e.preventDefault();
//         //gọi hàm createTask có đầu vào là text
//         this.props.createTask(this.state.text);
//         //clear input khi ấn submit
//         this.setState({text:""});
//     };

//     render(){
//         return(
//             <form className="form" action="" onSubmit={this.handleSubmit}>
//             <input placeholder="Thêm công việc" className="input" type="text"
//                    value={this.state.text}
//                    onChange={this.handleChange}    
//             />
//             <button className="btn-add">Add</button>
//             </form>
//         );
//     }
    
// };


