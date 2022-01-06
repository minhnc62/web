const Square = (props)=>{

        return(
            <div>
                <button className="square" onClick={props.onClick}>
                {props.value}
                </button>
            </div>
        );
    
    
}

// const Square = (props) =>{
//     return (
//       <button className="square" onClick={props.onClick}>
//         {props.value}
//       </button>
//     );
//   }
  