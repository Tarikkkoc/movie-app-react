import React from "react";
import { Link } from "react-router-dom";

const Account = ({ currentUser, handleExit }) => {
  return (
    <div className="h-screen container max-w-6xl mx-auto px-4 text-white">
      {currentUser && (
        <div className="pt-10">
          <div className="flex flex-col gap-3">
            <span>Adınız: {currentUser.name}</span>
            <span>Soyadınız: {currentUser.surname}</span>
            <span>Kullanıcı adı: {currentUser.username}</span>
            <span>Mail adresi: {currentUser.mail}</span>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-400 rounded-full px-6 py-3 mt-5 text-white"
            onClick={handleExit}
          >
            Çıkış yap
          </button>
        </div>
      )}
      {!currentUser && (
        <div className="pt-10">
          <div>
            <h3 className="font-barlow text-xl font-medium">
              Kullanıcı bulunamadı lütfen giriş yapın
            </h3>
            <Link to="/login">
              <span className="text-medium underline underline-offset-4 font-barlow">
                Giriş yap
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
