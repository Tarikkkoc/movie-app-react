import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { css, styled } from "@emotion/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = ({
  currentUser,
  selectedMovieGenre,
  selectedSerieGenre,
  selectedMusicGenre,
  detailMovie,
  detailSerie,
  detailMusic,
  openMovie,
  selectedMovieImg,
  selectedMovieTitle,
  handleOpenMovie,
  handleCloseMovie,
  openSerie,
  selectedSerieImg,
  selectedSerieTitle,
  handleOpenSerie,
  handleCloseSerie,
  openMusic,
  selectedMusicImg,
  selectedMusicTitle,
  handleOpenMusic,
  handleCloseMusic,
}) => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div className="container max-w-6xl mx-auto px-10 text-white pt-10">
      <h2 className="font-barlow text-5xl font-medium pt-5">Filmler</h2>
      <div>
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
                <div className="flex flex-col gap-20 ">
                  <div>
                    <p className="text-black text-2xl font-semibold font-barlow">
                      {selectedMovieTitle}
                    </p>
                    <p>Tür: {selectedMovieGenre}</p>
                  </div>
                  <div>
                    <button
                      className="w-20 p-2 bg-blue-900 text-white font-barlow rounded-xl hover:bg-blue-500"
                      onClick={detailMovie}
                    >
                      Detay
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        <Slider {...settings} className="w-full flex mt-3">
          {movie
            .filter((item) => item.rating >= 7.5)
            .map((item) => (
              <div className="relative shadow-2xl" key={item.id}>
                <img
                  onClick={() =>
                    handleOpenMovie(
                      item.img,
                      item.title,
                      item.rating,
                      item.genre,
                      item.matter
                    )
                  }
                  className="w-full h-72 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
                  src={item.img}
                  alt=""
                />
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
        </Slider>
        <div className="mt-8  font-barlow text-lg">
          <p className="mobile:hidden tablet:hidden">
            İzlediğiniz filmin konusu, oyuncuları, IMDB puanı ve daha fazlası
            için
          </p>
          <p className="hidden tablet:flex mobile:flex">Daha fazlası için</p>
          <Link to="/movies">
            <span className="underline underline-offset-2 text-xl font-medium">
              Filmler...
            </span>
          </Link>
        </div>
      </div>
      <h2 className="font-barlow text-5xl font-medium pt-5">Diziler</h2>
      <div>
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
                <div className="flex flex-col gap-20 ">
                  <div>
                    <p className="text-black text-2xl font-semibold font-barlow">
                      {selectedSerieTitle}
                    </p>
                    <p>Tür: {selectedSerieGenre}</p>
                  </div>
                  <div>
                    <button
                      className="w-20 p-2 bg-blue-900 text-white font-barlow rounded-xl hover:bg-blue-500"
                      onClick={detailSerie}
                    >
                      Detay
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        <Slider {...settings} className="w-full flex mt-3">
          {serie
            .filter((item) => item.rating >= 7.5)
            .map((item) => (
              <div className="relative shadow-2xl" key={item.id}>
                <img
                  onClick={() =>
                    handleOpenSerie(
                      item.img,
                      item.title,
                      item.rating,
                      item.genre,
                      item.matter
                    )
                  }
                  className="w-full h-72 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
                  src={item.img}
                  alt=""
                />
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
        </Slider>
        <div className="mt-8  font-barlow text-lg">
          <p className="mobile:hidden tablet:hidden">
            Popüler diziler, izlemek istediğiniz türler ve daha fazlası için
          </p>
          <p className="hidden tablet:flex mobile:flex">Daha fazlası için</p>
          <Link to="/series">
            <span className="underline underline-offset-2 text-xl font-medium">
              Diziler...
            </span>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="font-barlow text-5xl font-medium pt-5">Sanatçılar</h2>
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
                <div className="flex flex-col gap-20 ">
                  <div>
                    <p className="text-black text-2xl font-semibold font-barlow">
                      {selectedMusicTitle}
                    </p>
                    <p>Tür: {selectedMusicGenre}</p>
                  </div>
                  <div>
                    <button
                      className="w-20 p-2 bg-blue-900 text-white font-barlow rounded-xl hover:bg-blue-500"
                      onClick={detailMusic}
                    >
                      Detay
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        <Slider {...settings} className="w-full flex mt-3">
          {music
            .filter((item) => item.rating >= 7.5)
            .map((item) => (
              <div className="relative shadow-2xl" key={item.id}>
                <img
                  onClick={() =>
                    handleOpenMusic(
                      item.img,
                      item.title,
                      item.rating,
                      item.genre,
                      item.matter
                    )
                  }
                  className="w-full h-72 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
                  src={item.img}
                  alt=""
                />
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
        </Slider>
        <div className="mt-8  font-barlow text-lg">
          <p className="mobile:hidden tablet:hidden">
            Sevdiğiniz sanatçılar ve daha fazlası için
          </p>
          <p className="hidden tablet:flex mobile:flex">Daha fazlası için</p>
          <Link to="/musics">
            <span className="underline underline-offset-2 text-xl font-medium">
              Sanatçılar...
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
