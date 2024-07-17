import { Routes, Route } from "react-router-dom";
import "./App.css";
import BedspaceRequest from "./pages/bedspacerequest";
import RulesRegulations from "./pages/RulesRegulations";
import Payment from "./pages/Payment";
import Sidebar from "./components/sidebar";
import ScrollToTopHandler from "./components/scrollToTopHandler";
import Navbar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Header from "./components/Header";
import Login from "./pages/login";

function App() {
  // const isVerfied = true
  return (
    <>
      <ScrollToTopHandler>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </ScrollToTopHandler>
    </>
  );
}

export default App;
