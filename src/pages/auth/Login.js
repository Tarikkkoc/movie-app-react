import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 pt-8 h-screen grid place-items-center">
      <div className="grid place-items-center">
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="">
            <img className="max-w-[100px] w-full" src="/img/login.svg" alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <input
                className="p-2 rounded-xl"
                placeholder="Kullanıcı adı"
                type="text"
              />
            </div>
            <div>
              <input
                className="p-2 rounded-xl"
                placeholder="Şifre"
                type="password"
              />
            </div>
            <div className="w-full bg-slate-500 text-center rounded-xl">
              <button className="py-1">Giriş yap</button>
            </div>
          </div>
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
