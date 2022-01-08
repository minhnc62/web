
const gameHistory = [];

const XO = () =>{

    const [turn,setTurn]= React.useState("X");
    const [board,setBoard]= React.useState(Array(9).fill(null));
    const [winner,setWinner]= React.useState(null);
    
    
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    const check = (board)=>{
        for (const  line of lines) {
            const [a, b, c] = line;
            if (board[a] && board[a] == board[b] && board[a] == board[c]) {
              return turn ;
            }
          }
         
    }


    const handleClick = (index)=>{
        if(winner !== null || board[index] !== null ) return ;

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);
        gameHistory.push(newBoard)

        const win =   check(newBoard);
        if(win){
            setWinner(win);
        }else{
            setTurn(turn == "X" ? "0" : "X");

        }

    }
    const reset = ()=>{
        setTurn("X");
        setBoard(Array(9).fill(null));
        setWinner(null);
        gameHistory.splice(0,8);
    }

    return <div className="caro">
    <div className="container">
        <h2>Caro</h2>
        <div className="game">
            
            <div className="game-board">
                <h2>{winner ? "Winner: " + winner : "Turn: " + turn}</h2>
                {/* Khi cos winner hoac cos het tat ca gia tri trong board thi hien nut reset */}
                {(winner ||board.every(Boolean)) && ( <button onClick={reset}> New Game</button>)}
                <div className="row">
                    <Cell index={0} value= {board[0]} handleClick={handleClick}/>
                    <Cell index={1} value= {board[1]}  handleClick={handleClick}/>
                    <Cell index={2} value= {board[2]}  handleClick={handleClick}/>

                </div>
                <div className="row">
                    <Cell index={3} value= {board[3]}  handleClick={handleClick}/>
                    <Cell index={4} value= {board[4]}  handleClick={handleClick}/>
                    <Cell index={5} value= {board[5]}  handleClick={handleClick}/>

                </div>
                <div className="row">
                    <Cell index={6} value= {board[6]}  handleClick={handleClick}/>
                    <Cell index={7} value= {board[7]}  handleClick={handleClick}/>
                    <Cell index={8} value= {board[8]}  handleClick={handleClick}/>

                </div>
                <div className="game-history">
                {gameHistory.map((value,index)=>{
                    return(
                    <button key={index} onClick={()=>setBoard(value)}>Back to: #{index}</button>
                    );
                    })}
            </div>
            </div>
            
        </div>
    </div>

</div>
}