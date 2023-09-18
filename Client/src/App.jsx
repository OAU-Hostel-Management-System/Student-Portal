import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BedspaceRequest from "./pages/bedspacerequest";
import RulesRegulations from "./pages/RulesRegulations";
import Payment from "./pages/Payment";
import Sidebar from "./components/sidebar";
import ScrollToTopHandler from "./components/scrollToTopHandler";
import Navbar from "./components/navbar";

function App() {
  // const isVerfied = true
  return (
    <div className="w-full p-0 m-0 flex flex-row relative ">
      <Sidebar />
      <div className="w-full md:ml-[350px] relative bg-[#EBEBEB] min-h-screen flex flex-col scroll-smooth">
        <ScrollToTopHandler>
          <Navbar />
          <div className="p-14 bg-white m-4 mt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bedspace-request" element={<BedspaceRequest />} />
              <Route path="/rules-and-regulations" element={<RulesRegulations />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </ScrollToTopHandler>
      </div>
    </div>
  );
}

export default App;
