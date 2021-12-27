const app = document.getElementById("app");



class Menu extends React.Component{
    render() {
       return (<div className="menu">
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </div>); 
    }
}
// function Menu(props)  {
//     return (<div className="menu">
//     <ul>
//         <li>home</li>
//         <li>about</li>
//         <li>contact</li>
//     </ul>
// </div>);
// }
class Welcome extends React.Component{
    render() {
        return (<div>
            <h2>Welcome Minh</h2>
        </div>
        );
    }
}

class App extends React.Component{
    render() {
        return (
            <div>
            
            <h1>logo app</h1>
            <Menu />
            <Welcome />
        </div>
        
        );
    }
        
    
        
    
}

ReactDOM.render(<App />,app);


