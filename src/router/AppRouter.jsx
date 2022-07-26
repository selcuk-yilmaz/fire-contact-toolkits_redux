import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import Navbar from "../components/Navbar";
import Edit from "../pages/Edit";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="edit" element={<Edit />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
