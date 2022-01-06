const TexInput = (props) =>{

    const handleChange = (e) =>{
        props.onTextChange(e.target.value)
    }


    return(
        <label className="lable-text" htmlFor="all">{props.lable}
        <br />
                <input className="bill-input" type="text"
                
                type={props.type}
                onChange={handleChange}
                
                /></label> 
    );

}