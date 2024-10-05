
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/Projects" element={ <h1> Projects Page</h1>}/>
      <Route path="/about" element={ <h1> About Page</h1>}/>
      <Route path="/contact" element={ <h1> Contact Page</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
