import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import BedspaceRequest from "./pages/bedspacerequest";
import Reports from "./pages/Reports";
import Payment from "./pages/Payment";
import Sidebar from "./components/sidebar";
import BedspaceInformation from "./pages/BedSpaceInformation";

function App() {
  // const isVerfied = true
  return (
    <div className="w-full p-0 m-0 flex flex-row relative " >
      <Sidebar />
      <div className="w-full md:ml-[350px] relative bg-[#EBEBEB] min-h-screen flex flex-col scroll-smooth">
        <Navbar />
        <div className="p-8 bg-white m-4 mt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bedspace-information" element={<BedspaceInformation />} />
            <Route path="/bedspace-request" element={<BedspaceRequest />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/payment" element={<Payment />} />
            {/* <Route path="/logout" element={<Home />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
