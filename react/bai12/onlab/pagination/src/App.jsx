
import ModalSearch from './component/ModalSearch';
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom';





function App() {

  



  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="logo">IMDB Search</h1>

         
          <ModalSearch/>
        </header>

        {/* <Outlet /> */}
      </div>
    </div>
  )
}

export default App
