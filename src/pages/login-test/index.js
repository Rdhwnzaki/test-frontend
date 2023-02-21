import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginTest() {
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email_user,
      password_user,
    };
    axios
      .post("http://localhost:3000/users/login", data)
      .then((res) => {
        console.log("Login Success");
        console.log(res);
        const user = res.data.message;
        console.log(user);
        localStorage.setItem("token", user.token);
        Swal.fire("Success", "Login Success", "success");
        navigate("/home");
      })
      .catch((err) => {
        console.log("Login Failed");
        console.log(err);
        Swal.fire("Warning", "Login Fail", "warning");
      });
  };
  return (
    <div>
      <div className="container" style={{ width: "500px", marginTop: "100px" }}>
        <input
          className="form-control"
          type="email"
          placeholder="Masukan Email"
          name="email_user"
          value={email_user}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mt-4"
          type="password"
          placeholder="Masukan Password"
          name="password_user"
          value={password_user}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-success mt-4"
          style={{ width: "477px" }}
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginTest;
