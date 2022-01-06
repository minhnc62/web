const SelectorOption = (props)=>{

    return(
          <option className="text-option" value={props.value}>{props.text}</option>
 
    );
}


const SelectorInput = (props)=>{
    const handleChange = (e)=>{
        props.handleServiceChange(e.target.value);
    }

    return(
        <div>
            <select className="select" onChange={handleChange}>Choose ...
          <option className="text-option" disabled selected value="" >Choose ...</option>
          
          <SelectorOption value="0.3" text="30% - Outstanding" />
          <SelectorOption value="0.2" text="20% - Good" />
          <SelectorOption value="0.15" text="15% - It's OK" />
          <SelectorOption value="0.1" text="10% - Bad" />
          <SelectorOption value="0.05" text="5% - Terrible" />

          
        </select>
        </div>
    );
}