class Counter extends React.Component {
    state = {
        value:0,
    }
    decrease = () => this.setState({value: this.state.value - 1});

    increase = () => this.setState({value: this.state.value + 1});

    reset = () => this.setState({value: 0});

    render() {
        return (
        <div className="counter">
            <div className="container">
                <h1 className="couter-heading">Counter</h1>
                <p className="number">{this.state.value}</p>
                <button className="btn" onClick={this.decrease}>Decrease</button>
                <button className="btn" onClick={this.reset}>Reset</button>
                <button className="btn" onClick={this.increase}>Increase</button>
            </div>
        </div>
        

        );
    }
}
