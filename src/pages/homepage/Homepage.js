import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { css, styled } from "@emotion/css";

const Homepage = ({ currentUser }) => {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);
  const [music, setMusic] = useState([]);
  const [clickedItemIds, setClickedItemIds] = useState([]);

  const handleClick = (itemTitle) => {
    if (clickedItemIds.includes(itemTitle)) {
      setClickedItemIds(clickedItemIds.filter((title) => title !== itemTitle));
    } else {
      setClickedItemIds([...clickedItemIds, itemTitle]);
    }
  };

  const [openMusic, setOpenMusic] = useState(false);
  const [selectedMusicImg, setSelectedMusicImg] = useState(null);
  const [selectedMusicTitle, setSelectedMusicTitle] = useState(null);
  const handleOpenMusic = (img, title) => {
    setSelectedMusicImg(img);
    setSelectedMusicTitle(title);
    setOpenMusic(true);
  };
  const handleCloseMusic = () => {
    setOpenMusic(false);
  };

  const [openMovie, setOpenMovie] = useState(false);
  const [selectedMovieImg, setSelectedMovieImg] = useState(null);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState(null);
  const handleOpenMovie = (img, title) => {
    setSelectedMovieImg(img);
    setSelectedMovieTitle(title);
    setOpenMovie(true);
  };
  const handleCloseMovie = () => {
    setOpenMovie(false);
  };

  const [openSerie, setOpenSerie] = useState(false);
  const [selectedSerieImg, setSelectedSerieImg] = useState(null);
  const [selectedSerieTitle, setSelectedSerieTitle] = useState(null);
  const handleOpenSerie = (img, title) => {
    setSelectedSerieImg(img);
    setSelectedSerieTitle(title);
    setOpenSerie(true);
  };
  const handleCloseSerie = () => {
    setOpenSerie(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((movies) => {
        setMovie(movies);
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:5000/series")
      .then((res) => res.json())
      .then((series) => {
        setSerie(series);
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:5000/musics")
      .then((res) => res.json())
      .then((musics) => {
        setMusic(musics);
      })
      .catch((error) => console.log(error));
    // alertify.set("notifier", "position", "bottom-right");
  }, []);

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-center font-barlow text-5xl font-medium pt-5">
        Filmler
      </h2>
      <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-center mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
        <Modal
          keepMounted
          open={openMovie}
          onClose={handleCloseMovie}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            {selectedMovieImg && (
              <div className="flex gap-5">
                <img className="w-1/2" src={selectedMovieImg} />
                <div className="flex flex-col gap-2">
                  <div className="text-black text-2xl font-semibold font-barlow">
                    {selectedMovieTitle}
                  </div>
                  <div>
                    <p>Filmin konusu eklenince burada yer alacak.</p>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        {movie.map((item) => (
          <div className="w-60 relative shadow-2xl" key={item.id}>
            <img
              onClick={() => handleOpenMovie(item.img, item.title)}
              className="w-full h-72 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
              src={item.img}
              alt=""
            />
            <div
              onClick={() => handleClick(item.title)}
              className={`absolute rounded-full cursor-pointer top-1.5 right-1.5 p-1 ${
                clickedItemIds.includes(item.title)
                  ? "bg-green-500"
                  : "bg-white opacity-70 hover:opacity-100"
              }`}
            >
              <img className="w-6" src="/img/star1.svg" alt="" />
            </div>
            <div className="flex items-center absolute bottom-1 left-1 right-1 font-barlow p-1 justify-between">
              <span className="text-white text-2xl font-semibold">
                {item.title}
              </span>
              <div>
                <span className="bg-green-900 text-white font-semibold p-2 rounded-full ">
                  {item.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center font-barlow text-lg">
        <p>
          İzlediğiniz filmin konusu, oyuncuları, IMDB puanı ve daha fazlası için
        </p>
        <Link to="/movies">
          <span className="underline underline-offset-2 text-xl font-medium">
            Movies...
          </span>
        </Link>
      </div>
      <h2 className="text-center font-barlow text-5xl font-medium mt-5">
        Diziler
      </h2>
      <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-between mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
        <Modal
          keepMounted
          open={openSerie}
          onClose={handleCloseSerie}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            {selectedSerieImg && (
              <div className="flex gap-5">
                <img className="w-1/2" src={selectedSerieImg} />
                <div className="flex flex-col gap-2">
                  <div className="text-black text-2xl font-semibold font-barlow">
                    {selectedSerieTitle}
                  </div>
                  <div>
                    <p>Dizinin konusu eklenince burada yer alacak.</p>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        {serie.map((item) => (
          <div className="w-60 relative shadow-2xl" key={item.id}>
            <img
              onClick={() => handleOpenMovie(item.img, item.title)}
              className="w-full h-72 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
              src={item.img}
              alt=""
            />
            <div
              onClick={() => handleClick(item.title)}
              className={`absolute top-1.5 right-1.5 p-1 rounded-full cursor-pointer ${
                clickedItemIds.includes(item.title)
                  ? "bg-green-500"
                  : " bg-white opacity-70 hover:opacity-100"
              }`}
            >
              <img className="w-6" src="/img/star1.svg" alt="" />
            </div>
            <div className="flex items-center absolute bottom-1 left-1 right-1 font-barlow p-1 justify-between">
              <span className="text-white text-2xl font-semibold">
                {item.title}
              </span>
              <div>
                <span className="bg-green-900 text-white font-semibold p-2 rounded-full ">
                  {item.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center font-barlow text-lg">
        <p>
          Sevidiğiniz dizilerin konusu, oyuncuları, IMDB puanı ve daha fazlası
          için
        </p>
        <Link to="/series">
          <span className="underline underline-offset-2 text-xl font-medium">
            Series...
          </span>
        </Link>
      </div>
      <h2 className="text-center font-barlow text-5xl font-medium mt-5">
        Sanatçılar
      </h2>
      <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-between mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
        <Modal
          keepMounted
          open={openMusic}
          onClose={handleCloseMusic}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            {selectedMusicImg && (
              <div className="flex gap-5">
                <img className="w-1/2" src={selectedMusicImg} />
                <div className="flex flex-col gap-2">
                  <div className="text-black text-2xl font-semibold font-barlow">
                    {selectedMusicTitle}
                  </div>
                  <div>
                    <p>Şarkının konusu eklenince burada yer alacak.</p>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        {music.map((item) => (
          <div className="w-60 relative shadow-2xl" key={item.id}>
            <img
              onClick={() => handleOpenMusic(item.img, item.title)}
              className="w-full h-72 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
              src={item.img}
              alt=""
            />
            <div
              onClick={() => handleClick(item.title)}
              className={`absolute top-1.5 right-1.5 p-1 rounded-full cursor-pointer ${
                clickedItemIds.includes(item.title)
                  ? "bg-green-500"
                  : "bg-white opacity-70 hover:opacity-100"
              }`}
            >
              <img className="w-6" src="/img/star1.svg" alt="" />
            </div>
            <div className="flex items-center absolute bottom-1 left-1 right-1 font-barlow p-1 justify-between">
              <span className="text-white text-2xl font-semibold">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center font-barlow text-lg">
        <p>Sevdiğiniz şarkılar, sanatçılar ve daha fazlası için</p>
        <Link to="/musics">
          <span className="underline underline-offset-2 text-xl font-medium">
            Musics...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
