import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");
  const [name_user, setNameUser] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email_user,
      password_user,
      name_user,
      phone_number,
      alamat,
    };
    axios
      .post("http://localhost:3000/users/register-test", data)
      .then((res) => {
        console.log("Register Success");
        console.log(res);
        const user = res.data.message;
        console.log(user);
        Swal.fire("Success", "Register Success", "success");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Register Failed");
        console.log(err);
        Swal.fire("Warning", "Register Fail", "warning");
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-6">
            <h6 htmlFor="" className="form-label text-start">
              Nama
            </h6>
            <input
              type="text"
              placeholder="Masukan Nama"
              className="form-control"
              name="name_user"
              value={name_user}
              onChange={(e) => setNameUser(e.target.value)}
            />
          </div>
          <div className="col-6">
            <h6 htmlFor="" className="form-label text-start">
              Email
            </h6>
            <input
              type="email"
              placeholder="Masukan Email"
              className="form-control"
              name="email_user"
              value={email_user}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-6">
            <h6 htmlFor="" className="form-label text-start">
              No HP
            </h6>
            <input
              type="number"
              placeholder="Masukan No HP"
              className="form-control"
              name="phone_number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="col-6">
            <h6 htmlFor="" className="form-label text-start">
              Alamat
            </h6>
            <textarea
              rows="1"
              className="form-control"
              name="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-6">
            <h6 htmlFor="" className="form-label text-start">
              Password
            </h6>
            <input
              type="password"
              placeholder="Masukan Password"
              className="form-control"
              name="password_user"
              value={password_user}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-success mt-4"
            type="sumbit"
            onClick={handleSubmit}
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
