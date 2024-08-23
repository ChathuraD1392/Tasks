import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manual from "./pages/Manual";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import AddBookForm from "./pages/AddBookForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/manual" element={<Manual />}></Route>
          <Route path="/addbook" element={<AddBookForm />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
