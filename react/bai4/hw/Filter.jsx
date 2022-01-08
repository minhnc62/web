const FilterOption = (props) =>{
    return (   
                <label className="filter-item" htmlFor="all">
                <input className="input-radio" type="radio" name="filter" 
                value={props.value}
                checked={props.checked}
                />{props.lable}</label>    
    );
}


const Filter = (props) =>{
    const handleChange = (e)=>{
        props.filterBy(e.target.value)
    }
    return (
        <form className="filter" action="" onChange={handleChange}>
            <div>
                Lọc theo :
                <br />
                <div className="filter-oftion">
                <FilterOption lable="Tất cả" value="all" defaultChecked={props.currentOption =="all"} />
                <FilterOption lable="Chưa hoàn thành" value="no-completed" defaultChecked={props.currentOption == "no-completed"} />
                <FilterOption lable="Đã hoàn thành" value="completed" defaultChecked={props.currentOption == "completed"} />
                </div>
                
            </div>
        </form>
    );
}