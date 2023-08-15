import React from "react";
import { Link } from "react-router-dom";

const Admin = ({ admin, adminExit }) => {
  return (
    <div className="h-screen container max-w-6xl mx-auto px-4 text-white">
      {admin && (
        <div>
          <div className="pt-16">
            <div className="text-center font-barlow text-5xl">
              <h2>KONTROL MERKEZİ</h2>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <Link to="/admin-movie">
              <div className="py-5 text-center rounded-xl font-barlow text-3xl text-white cursor-pointer bg-blue-800 hover:bg-blue-400">
                Filmleri Yönet
              </div>
            </Link>
            <Link to="/admin-serie">
              <div className="py-5 text-center rounded-xl font-barlow text-3xl text-white cursor-pointer bg-blue-900 hover:bg-blue-500">
                Dizileri Yönet
              </div>
            </Link>
            <Link to="/admin-music">
              <div className="py-5 text-center rounded-xl font-barlow text-3xl text-white cursor-pointer bg-blue-950 hover:bg-blue-600">
                Müzikleri Yönet
              </div>
            </Link>
          </div>
          <div className="text-center">
            <button
              onClick={adminExit}
              className="bg-blue-600 hover:bg-blue-400 rounded-full px-6 py-3 mt-5 text-white"
            >
              Çıkış yap
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
