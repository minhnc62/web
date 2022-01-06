class Caro extends React.Component{
    render(){
        return(
            <div className="caro">
                <div className="container">
                    <h2>Caro</h2>
                    <div className="game">
                        <div className="game-board">
                            <Board/>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

 

  
  // ========================================
 //hàm kiểm tra bên nào thắng
  const calculateWinner = (squares) => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }