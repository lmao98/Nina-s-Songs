import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
function App() {
  return (
    <BrowserRouter >
    <div className="row container" >
      <div className="column bottom">
        <img src="/nina-left.webp"/>
      </div>
      <div className="column grow">
        <Header />
        <Routes >
          
        </Routes>
      </div>
      <div className="column top">
        <img src="/nina-right.webp"/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
