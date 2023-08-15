import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminPanel = ({ adminLogin, handleAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = adminLogin.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      handleAdmin(username, password);
    } else {
      Swal.fire(
        "Kullanıcı adı veya şifre hatalı",
        "Lütfen tekrar deneyin",
        "error"
      );
    }
  };
  return (
    <div className="container max-w-6xl mx-auto px-4 pt-8 h-screen grid place-items-center text-white">
      <div className="grid place-items-center">
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="">
            <img className="max-w-[100px] w-full" src="/img/login.svg" alt="" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <input
                className="p-2 rounded-xl text-black"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı adı"
                type="text"
              />
            </div>
            <div>
              <input
                className="p-2 rounded-xl text-black"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                type="password"
              />
            </div>
            <div className="w-full bg-slate-500 text-center rounded-xl">
              <button className="py-1">Giriş yap</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
