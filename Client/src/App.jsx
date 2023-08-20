import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";

function App() {
  return (
    <div className="App w-screen flex ">
      <Login />
      {/* <Sidebar />

      <div>
        <Navbar />
        <div className=" mt-16">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div> */}
    </div>
  );
}

export default App;
