class Clock extends React.Component{
    constructor() {
        super();
        setInterval(()=>{
            this.setState({
                time :new Date(),
            })
        },1000)
        setInterval(()=>{
            const newState = {
                a: this.state.a +1,
            } ;
            this.setState(newState);
            // this.setState({
            //     a: this.state.a +1,
            // })
        },1000)
        setInterval(()=>{
            this.setState((prevState)=>{
                return {
                    a: prevState.a + 1,
                }
            })
        })
    }
    state = {
        a:1,
        time :new Date(),
    }
    render(){
        return (
        <div>
            <p className="clock"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg> {this.state.time.toLocaleString()}</p>
            <p>A: {this.state.a}</p>
        </div>
        )
    }
}