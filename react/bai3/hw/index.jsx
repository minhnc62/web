const app = document.getElementById("app");



class App extends React.Component {
   
    render() {
        return (
            <div>
        <Counter/>
        <Apptodo/>
        <Tipapp/>
        <Caro/>
        </div>

        );
    }
}


ReactDOM.render(<App />,app);



