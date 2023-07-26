import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
