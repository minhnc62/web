const Result = (props)=>{
    //style={{ display: tipResultDisplay }}
    return <div className="tipResults" style={{ display: props.tipResultDisplay }}>
    <p>Tip $
      <strong>{props.tipAmount}</strong> each person</p>
    
  </div>
} 