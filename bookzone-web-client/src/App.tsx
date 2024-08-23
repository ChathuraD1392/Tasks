import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manual from "./pages/Manual";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/manual" element={<Manual />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
