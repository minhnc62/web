class Welcome extends React.Component{
    constructor() {
        super();
        setTimeout(()=>{
            this.setState({
                name : "hello",
            })
        },5000)
    }
    state = {
        name :"minh",
    }
    render(){
        return <p>{this.state.name}</p>
    }
}