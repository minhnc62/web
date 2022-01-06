

class Tipapp extends React.Component{
    state = {
        bill : "",
        people : "",
        service: "",
        tipAmount: "",
        tipResultDisplay: "none",
        
    };

    handleBillChange = (e) => this.setState({
        bill : e,
    })
    handlePeopleChange = (e) => this.setState({
        people : e,
    })
    handleServiceChange = (e) => this.setState({
        service : e,
    })
    handleCaculate = ()=>{
        if(!isNaN(this.state.bill) && !isNaN(this.state.people) && !isNaN(this.state.service)){
            if((this.state.bill > 0)&&(this.state.people > 0)&&(this.state.service > 0)){
                let tipAmount = (this.state.bill * this.state.service) / this.state.people;
                tipAmount = Math.round(tipAmount * 100) / 100;
                tipAmount = tipAmount.toFixed(2);
                this.setState({
                    
                    
                    tipResultDisplay: "block",
                    tipAmount: tipAmount
                  });

            }
        }
    }

    render(){
        return(
            <div className="tip-caculator">
                <div className="container">
                <h2 className="tip-heading"> Tip Caculator</h2>
                <TexInput lable="Bill amount" type="bill" onTextChange={this.handleBillChange}/>
                <br />
                <TexInput lable="Number of guests" type="people" onTextChange={this.handlePeopleChange} />
                <br />
                <p className="title-service">Service Quanlity</p>
                <SelectorInput handleServiceChange={this.handleServiceChange}/>
                
                <Result tipResultDisplay={this.state.tipResultDisplay}
                        tipAmount={this.state.tipAmount}
                />
                <div className="button-caculate">
                <button className="btn-caculate" onClick={this.handleCaculate}>Calculate</button>

                </div>

            </div>
            </div>
            
        );
    }
}