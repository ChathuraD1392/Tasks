import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manual from "./pages/Manual";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/manual" element={<Manual />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
