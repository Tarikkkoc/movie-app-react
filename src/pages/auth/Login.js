import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({ loginData, handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = loginData.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      handleLogin(username, password);
    } else {
      Swal.fire(
        "Kullanıcı adı veya şifre hatalı",
        "Lütfen tekrar deneyin",
        "error"
      );
    }
  };
  return (
    <div className="container max-w-6xl mx-auto px-4 pt-8 h-screen grid place-items-center">
      <div className="grid place-items-center">
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="">
            <img className="max-w-[100px] w-full" src="/img/login.svg" alt="" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="p-2 rounded-xl"
                placeholder="Kullanıcı adı"
                type="text"
              />
            </div>
            <div>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-2 rounded-xl"
                placeholder="Şifre"
                type="password"
              />
            </div>
            <div className="w-full bg-slate-500 text-center rounded-xl">
              <button className="py-1">Giriş yap</button>
            </div>
          </form>
          <div className="flex flex-col items-start">
            <Link>
              <span className="text-sm underline underline-offset-4">
                Şifrenizi mi unuttunuz?
              </span>
            </Link>
            <Link to="/register">
              <span className="text-sm underline underline-offset-4">
                Hesabınız yok mu?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
