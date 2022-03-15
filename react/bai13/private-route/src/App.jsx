import { Outlet, NavLink } from "react-router-dom"
import { useEffect } from "react"
import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch= useDispatch();
  const {loading, user} = useSelector((state) => state.auth);

  useEffect(()=>{
    if (localStorage.getItem("token"))dispatch(getUser());
  },[]);

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">Blog App</h1>
        <nav className="nav">
          <NavLink to={"/"}>Home page</NavLink>
          <NavLink to={"/admin"}>Admin page</NavLink>

        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

    </div>
  )
}

export default App
