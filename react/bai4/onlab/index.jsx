const app = document.getElementById("app");

const Counter = ()=>{
    const [value,setValue] = React.useState(0);
    const decrease = () => setValue(value - 1);

    const increase = () => setValue(value + 1);

    const reset = () => setValue( 0);
    return(
        
            <div className="counter">
            <div className="container">
                <div>
                <h1 className="couter-heading">Counter</h1>
                <p className="number">{value}</p>
                <button className="btn" onClick={decrease}>Decrease</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={increase}>Increase</button>
                </div>
                <Bmi/>
            </div>
        </div>
        
    );
}

ReactDOM.render(<Counter />,app);



