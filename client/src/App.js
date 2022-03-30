import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Songs from "./components/pages/Songs";
import SingleSong from "./components/pages/SingleSong";

function App() {
  return (
    <BrowserRouter >
      <div className="row container" >
        <div className="column bottom">
          <img src="/nina-left.webp" />
        </div>
        <div className="column grow">
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/song/:id" element={<SingleSong />} />
          </Routes>
        </div>
        <div className="column top">
          <img src="/nina-right.webp" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
