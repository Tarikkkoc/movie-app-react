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
import Results from "../../components/Results";

const Main = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([]);

  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const resultsFlat = results.flat();
  const filteredMovies = resultsFlat.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch("http://localhost:5000/movies");
        const movies = await res1.json();

        const res2 = await fetch("http://localhost:5000/series");
        const series = await res2.json();

        const res3 = await fetch("http://localhost:5000/musics");
        const musics = await res3.json();

        setResults([...movies, ...series, ...musics]);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (location.pathname === "/login") {
      fetch("http://localhost:5000/users")
        .then((res) => res.json())
        .then((data) => {
          setLoginData(data);
          console.log(loginData);
        })
        .catch((error) => {
          alert(error);
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
        <Navbar
          currentUser={currentUser}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredMovies={filteredMovies}
        />
      </div>
      <Routes>
        <Route path="/" element={<Homepage currentUser={currentUser} />} />
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
        <Route
          path="/search-results"
          element={<Results filteredMovies={filteredMovies} />}
        />
      </Routes>
    </div>
  );
};

export default Main;
