 

const Bmi = () =>{
    const [kg,setKg] = React.useState("");
    const [height,setHeight] = React.useState("");
    const [show,setShow] = React.useState(false);

    const showBmi = ()=>{
        setShow(true);
    };
    return(
        <div className="bmi">
            <h2>Body Mass Index</h2>
            <input type="text" placeholder="Cân nặng (kg)" value={kg} onChange={(e)=>setKg(e.target.value)}/>
            <input type="text" placeholder="Chiều cao (m)" value={height} onChange={(e)=>setHeight(e.target.value)} />


            <p>Your BMI: {show && (kg / (height * height))}</p>
            <button onClick={showBmi}>Catulate</button>


        </div>
    );
}