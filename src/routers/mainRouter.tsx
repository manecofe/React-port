import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/React-port/">
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
