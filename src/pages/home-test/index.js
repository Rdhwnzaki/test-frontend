/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function HomeTest() {
  const [data, setData] = useState([]);
  const dataUser = "http://localhost:3000/users/get-user";
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const getData = async () => {
      try {
        let result = await axios.get(dataUser, user);
        setData(result.data.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div className="container">
        <h4 className="my-4 text-start">Daftar User</h4>
        <div className="row">
          {data.map((item) => (
            <div className="col-3">
              <div className="card">
                <div className="my-4">
                  <h6>{item.name_user}</h6>
                  <h6>Email : {item.email_user}</h6>
                  <h6>Hp : {item.phone_number}</h6>
                  <h6>Alamat : {item.alamat ? item.alamat : "-"}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeTest;
