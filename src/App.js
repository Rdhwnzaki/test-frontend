import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import LoginTest from "./pages/login-test";
import HomeTest from "./pages/home-test";
import Swal from "sweetalert2";
import Register from "./pages/register";

function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Outlet />;
    } else {
      Swal.fire("Warning", "Please login first", "warning");
      return <Navigate to="/login-test" />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} replace="true" />
          <Route path="/login" element={<LoginTest />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<PrivateRoute />}>
            <Route index element={<HomeTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
