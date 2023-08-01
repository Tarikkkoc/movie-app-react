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
import Detail from "./Detail";

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

  const [openFilter, setOpenFilter] = useState(false);
  const [detailFilterImg, setDetailFilterImg] = useState(null);
  const [detailFilterTitle, setDetailFilterTitle] = useState(null);
  const [detailFilterRating, setDetailFilterRating] = useState(null);
  const [detailFilterGenre, setDetailFilterGenre] = useState(null);
  const [selectedFilterImg, setSelectedFilterImg] = useState(null);
  const [selectedFilterTitle, setSelectedFilterTitle] = useState(null);
  const [selectedFilterRating, setSelectedFilterRating] = useState(null);
  const [selectedFilterGenre, setSelectedFilterGenre] = useState(null);

  const handleOpenFilter = (img, title, rating, genre) => {
    setSelectedFilterImg(img);
    setSelectedFilterTitle(title);
    setSelectedFilterRating(rating);
    setSelectedFilterGenre(genre);
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const detailFilter = () => {
    setDetailFilterImg(selectedFilterImg);
    setDetailFilterTitle(selectedFilterTitle);
    setDetailFilterRating(selectedFilterRating);
    setDetailFilterGenre(selectedFilterGenre);
    setOpenFilter(false);
    setDetailMovieImg(null);
    setDetailSerieImg(null);
    setDetailMusicImg(null);
    navigate("/detail-page");
  };

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

  const [openMovie, setOpenMovie] = useState(false);
  const [selectedMovieImg, setSelectedMovieImg] = useState(null);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState(null);
  const [selectedMovieRating, setSelectedMovieRating] = useState(null);
  const [selectedMovieGenre, setSelectedMovieGenre] = useState(null);

  const handleOpenMovie = (img, title, rating, genre) => {
    setSelectedMovieImg(img);
    setSelectedMovieTitle(title);
    setSelectedMovieRating(rating);
    setSelectedMovieGenre(genre);
    setOpenMovie(true);
  };

  const handleCloseMovie = () => {
    setOpenMovie(false);
  };

  const [openSerie, setOpenSerie] = useState(false);
  const [selectedSerieImg, setSelectedSerieImg] = useState(null);
  const [selectedSerieTitle, setSelectedSerieTitle] = useState(null);
  const [selectedSerieRating, setSelectedSerieRating] = useState(null);
  const [selectedSerieGenre, setSelectedSerieGenre] = useState(null);

  const handleOpenSerie = (img, title, rating, genre) => {
    setSelectedSerieImg(img);
    setSelectedSerieTitle(title);
    setSelectedSerieRating(rating);
    setSelectedSerieGenre(genre);
    setOpenSerie(true);
  };

  const handleCloseSerie = () => {
    setOpenSerie(false);
  };

  const [openMusic, setOpenMusic] = useState(false);
  const [selectedMusicImg, setSelectedMusicImg] = useState(null);
  const [selectedMusicTitle, setSelectedMusicTitle] = useState(null);
  const [selectedMusicRating, setSelectedMusicRating] = useState(null);
  const [selectedMusicGenre, setSelectedMusicGenre] = useState(null);

  const handleOpenMusic = (img, title, rating, genre) => {
    setOpenMusic(true);
    setSelectedMusicImg(img);
    setSelectedMusicTitle(title);
    setSelectedMusicRating(rating);
    setSelectedMusicGenre(genre);
  };

  const handleCloseMusic = () => {
    setOpenMusic(false);
  };

  const [detailMovieImg, setDetailMovieImg] = useState(null);
  const [detailMovieTitle, setDetailMovieTitle] = useState(null);
  const [detailMovieRating, setDetailMovieRating] = useState(null);
  const [detailMovieGenre, setDetailMovieGenre] = useState(null);

  const detailMovie = () => {
    setDetailMovieImg(selectedMovieImg);
    setDetailMovieTitle(selectedMovieTitle);
    setDetailMovieRating(selectedMovieRating);
    setDetailMovieGenre(selectedMovieGenre);
    setDetailSerieImg(null);
    setDetailMusicImg(null);
    setDetailFilterImg(null);
    setOpenMovie(false);
    navigate("/detail-page");
  };

  const [detailSerieImg, setDetailSerieImg] = useState(null);
  const [detailSerieTitle, setDetailSerieTitle] = useState(null);
  const [detailSerieRating, setDetailSerieRating] = useState(null);
  const [detailSerieGenre, setDetailSerieGenre] = useState(null);

  const detailSerie = () => {
    setDetailSerieImg(selectedSerieImg);
    setDetailSerieTitle(selectedSerieTitle);
    setDetailSerieRating(selectedSerieRating);
    setDetailSerieGenre(selectedSerieGenre);
    setDetailMovieImg(null);
    setDetailMusicImg(null);
    setDetailFilterImg(null);
    setOpenSerie(false);
    navigate("/detail-page");
  };

  const [detailMusicImg, setDetailMusicImg] = useState(null);
  const [detailMusicTitle, setDetailMusicTitle] = useState(null);
  const [detailMusicRating, setDetailMusicRating] = useState(null);
  const [detailMusicGenre, setDetailMusicGenre] = useState(null);

  const detailMusic = () => {
    setDetailMusicImg(selectedMusicImg);
    setDetailMusicTitle(selectedMusicTitle);
    setDetailMusicRating(selectedMusicRating);
    setDetailMusicGenre(selectedMusicGenre);
    setOpenMusic(false);
    setDetailMovieImg(null);
    setDetailSerieImg(null);
    setDetailFilterImg(null);
    navigate("/detail-page");
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
        <Route
          path="/"
          element={
            <Homepage
              currentUser={currentUser}
              detailMovie={detailMovie}
              detailSerie={detailSerie}
              detailMusic={detailMusic}
              openMovie={openMovie}
              selectedMovieImg={selectedMovieImg}
              selectedMovieTitle={selectedMovieTitle}
              handleOpenMovie={handleOpenMovie}
              handleCloseMovie={handleCloseMovie}
              openSerie={openSerie}
              selectedSerieImg={selectedSerieImg}
              selectedSerieTitle={selectedSerieTitle}
              handleOpenSerie={handleOpenSerie}
              handleCloseSerie={handleCloseSerie}
              openMusic={openMusic}
              selectedMusicImg={selectedMusicImg}
              selectedMusicTitle={selectedMusicTitle}
              handleOpenMusic={handleOpenMusic}
              handleCloseMusic={handleCloseMusic}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              openMovie={openMovie}
              selectedMovieImg={selectedMovieImg}
              selectedMovieTitle={selectedMovieTitle}
              handleOpenMovie={handleOpenMovie}
              handleCloseMovie={handleCloseMovie}
              detailMovie={detailMovie}
            />
          }
        />
        <Route
          path="/series"
          element={
            <Series
              openSerie={openSerie}
              selectedSerieImg={selectedSerieImg}
              selectedSerieTitle={selectedSerieTitle}
              handleOpenSerie={handleOpenSerie}
              handleCloseSerie={handleCloseSerie}
              detailSerie={detailSerie}
            />
          }
        />
        <Route
          path="/musics"
          element={
            <Musics
              openMusic={openMusic}
              selectedMusicImg={selectedMusicImg}
              selectedMusicTitle={selectedMusicTitle}
              handleOpenMusic={handleOpenMusic}
              handleCloseMusic={handleCloseMusic}
              detailMusic={detailMusic}
            />
          }
        />
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
          element={
            <Results
              filteredMovies={filteredMovies}
              openFilter={openFilter}
              handleOpenFilter={handleOpenFilter}
              handleCloseFilter={handleCloseFilter}
              selectedFilterImg={selectedFilterImg}
              selectedFilterTitle={selectedFilterTitle}
              detailFilter={detailFilter}
            />
          }
        />
        <Route
          path="/detail-page"
          element={
            <Detail
              detailMovieImg={detailMovieImg}
              detailMovieTitle={detailMovieTitle}
              detailMovieRating={detailMovieRating}
              detailMovieGenre={detailMovieGenre}
              detailSerieImg={detailSerieImg}
              detailSerieTitle={detailSerieTitle}
              detailSerieRating={detailSerieRating}
              detailSerieGenre={detailSerieGenre}
              detailMusicImg={detailMusicImg}
              detailMusicTitle={detailMusicTitle}
              detailMusicRating={detailMusicRating}
              detailMusicGenre={detailMusicGenre}
              detailFilterImg={detailFilterImg}
              detailFilterTitle={detailFilterTitle}
              detailFilterRating={detailFilterRating}
              detailFilterGenre={detailFilterGenre}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
