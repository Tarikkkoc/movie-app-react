import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Movies from "../movies/Movies";
import Series from "../series/Series";
import Musics from "../musics/Musics";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Account from "../account/Account";
import Navbar from "../../components/Navbar";

const Main = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (location.pathname === "/login") {
      fetch("http://localhost:5000/users")
        .then((res) => res.json())
        .then((data) => {
          setLoginData(data);
          console.log(loginData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location]);
  const handleLogin = (username, password) => {
    const user = loginData.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      navigate("/");
      console.log(currentUser);
    } else {
      alert("Kullanıcı adı veya şifre hatalı");
    }
  };
  const handleExit = () => {
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <div className="bg-blue-300 mt-14 z-0 pb-5">
      <div className="bg-blue-600 fixed top-0 w-full z-10 rounded-b-xl">
        <Navbar currentUser={currentUser} />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/musics" element={<Musics />} />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} loginData={loginData} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/my-account"
          element={
            <Account currentUser={currentUser} handleExit={handleExit} />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
