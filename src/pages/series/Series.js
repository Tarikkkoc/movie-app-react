import React, { useEffect, useState } from "react";
import Heros from "../hero/Hero";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { css, styled } from "@emotion/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Series = ({
  openSerie,
  selectedSerieImg,
  selectedSerieTitle,
  selectedSerieGenre,
  handleOpenSerie,
  handleCloseSerie,
  detailSerie,
}) => {
  const serieHeros = [
    { title: "Aksiyon" },
    { title: "Macera" },
    { title: "Korku" },
    { title: "Dram" },
    { title: "Suç" },
    { title: "Romantik" },
    { title: "Aile" },
    { title: "Fantastik" },
    { title: "Animasyon" },
    { title: "Çocuk" },
    { title: "Tarih" },
    { title: "Gerilim" },
    { title: "Bilim Kurgu" },
    { title: "Gizem" },
    { title: "Belgesel" },
    { title: "Komedi" },
  ];

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

  const [serie, setSerie] = useState([]);
  const [titleGenre, setTitleGenre] = useState(null);
  const [serieGenre, setSerieGenre] = useState(null);
  const [clicked, setClicked] = useState([]);

  const filterGenre = (genre) => {
    const filteredGenre = serie.filter((s) => s.genre === genre);
    setSerieGenre(filteredGenre);
    setTitleGenre(genre);
  };

  useEffect(() => {
    fetch("http://localhost:5000/series")
      .then((res) => res.json())
      .then((series) => {
        setSerie(series);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (itemTitle) => {
    if (clicked.includes(itemTitle)) {
      setClicked(clicked.filter((title) => title !== itemTitle));
    } else {
      setClicked([...clicked, itemTitle]);
    }
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
  return (
    <div className="container max-w-6xl mx-auto px-4 py-5 text-white">
      {!serieGenre && (
        <div>
          <Heros heros={serieHeros} filterGenre={filterGenre} />
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-barlow text-2xl font-medium pt-5">
                En çok oy alanlar
              </h2>
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
              <Slider {...settings} className="w-full mt-3">
                {serie
                  .filter((item) => item.rating >= 8.0)
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
                        className="w-full h-64 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
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
            </div>
            <div>
              <h2 className="font-barlow text-2xl font-medium pt-5">
                Aksiyon Dizileri
              </h2>
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
              <Slider {...settings} className="w-full mt-3">
                {serie
                  .filter((item) => item.genre === "Aksiyon")
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
                        className="w-full h-64 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
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
            </div>
            <div>
              <h2 className="font-barlow text-2xl font-medium pt-5">
                Korku Dizileri
              </h2>
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
              <Slider {...settings} className="w-full mt-3">
                {serie
                  .filter((item) => item.genre === "Korku")
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
                        className="w-full h-64 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
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
            </div>
            <div>
              <h2 className="font-barlow text-2xl font-medium pt-5">
                Suç İçerikleri Diziler
              </h2>
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
              <Slider {...settings} className="w-full mt-3">
                {serie
                  .filter((item) => item.genre === "Suç")
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
                        className="w-full h-64 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
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
            </div>
            <div>
              <h2 className="font-barlow text-2xl font-medium pt-5">
                Komedi Dizileri
              </h2>
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
              <Slider {...settings} className="w-full mt-3">
                {serie
                  .filter((item) => item.genre === "Komedi")
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
                        className="w-full h-64 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
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
            </div>
            <div>
              <h2 className="font-barlow text-2xl font-medium pt-5">
                Bilim Kurgu Dizileri
              </h2>
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
              <Slider {...settings} className="w-full mt-3">
                {serie
                  .filter((item) => item.genre === "Bilim Kurgu")
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
                        className="w-full h-64 mobile:h-44 tablet:h-44 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
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
            </div>
          </div>
          <h2 className="text-center font-barlow text-5xl font-medium pt-5">
            Diziler
          </h2>
          <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-center mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
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
            {serie.map((item) => (
              <div className="w-60 relative shadow-2xl" key={item.id}>
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
                  className="w-full h-72 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
                  src={item.img}
                  alt=""
                />
                <div
                  onClick={() => handleClick(item.title)}
                  className={`absolute rounded-full cursor-pointer top-1.5 right-1.5 p-1 ${
                    clicked.includes(item.title)
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
        </div>
      )}
      {serieGenre && (
        <div>
          <Heros filterGenre={filterGenre} heros={serieHeros} />
          <h2 className="text-center font-barlow text-5xl font-medium pt-5">
            {titleGenre}
          </h2>
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
          <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-center mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
            {serieGenre.map((item) => (
              <div className="w-60 relative shadow-2xl" key={item.id}>
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
                  className="w-full h-72 rounded-xl hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-150 duration-500 cursor-pointer"
                  src={item.img}
                  alt=""
                />
                <div
                  onClick={() => handleClick(item.title)}
                  className={`absolute rounded-full cursor-pointer top-1.5 right-1.5 p-1 ${
                    clicked.includes(item.title)
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
        </div>
      )}
    </div>
  );
};

export default Series;
