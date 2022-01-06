class Form extends React.Component{

    state = {
        text:"",
    }
    // cập nhập lại text
    handleChange = (e) =>{
        this.setState({
            text: e.target.value,
        })
    }
        handleSubmit = (e) =>{
        //khi submit không load lại trang
        e.preventDefault();
        //gọi hàm createTask có đầu vào là text
        this.props.createTask(this.state.text);
        //clear input khi ấn submit
        this.setState({text:""});
    };

    render(){
        return(
            <form className="form" action="" onSubmit={this.handleSubmit}>
            <input placeholder="Thêm công việc" className="input" type="text"
                   value={this.state.text}
                   onChange={this.handleChange}    
            />
            <button className="btn-add">Add</button>
            </form>
        );
    }
    
};


// const Form = (props) =>{

//     const handleSubmit = (e) =>{
//         //khi submit không load lại trang
//         e.preventDefault();
//         //gọi hàm createTask có đầu vào là value ở input 
//         //e.target của forrm. Thông qua thuộc tính elements truy cập đến form control thông qua name
//         props.createTask(e.target.elements.text.value);
//         //clear input khi ấn submit
//         e.target.elements.text.value = "";
//     };

//     return(
//         <form action="" onSubmit={handleSubmit}>
//         <input type="text" name="text" />
//         <button>add</button>
//         </form>
//     );
// };