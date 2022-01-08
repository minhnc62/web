const app = document.getElementById("app");



class App extends React.Component {
   
    render() {
        return (
            <div>
            <XO/>
            <Todo/>
            </div>

        );
    }
}


ReactDOM.render(<App />,app);



