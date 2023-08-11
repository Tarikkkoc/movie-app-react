import React, { useEffect, useState } from "react";
import Heros from "../hero/Hero";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { css, styled } from "@emotion/css";
import { Link } from "react-router-dom";

const Musics = ({
  openMusic,
  selectedMusicImg,
  selectedMusicTitle,
  selectedMusicGenre,
  handleOpenMusic,
  handleCloseMusic,
  detailMusic,
}) => {
  const musicHeros = [{ title: "Pop" }, { title: "Rap" }, { title: "Rock" }];

  const [musicGenre, setMusicGenre] = useState(null);
  const [titleGenre, setTitleGenre] = useState(null);

  const [music, setMusic] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/musics")
      .then((res) => res.json())
      .then((musics) => {
        setMusic(musics);
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

  const filterGenre = (genre) => {
    const filteredGenre = music.filter((m) => m.genre === genre);
    setMusicGenre(filteredGenre);
    setTitleGenre(genre);
  };
  return (
    <div className="container max-w-6xl mx-auto px-4 py-5">
      {!musicGenre && (
        <div>
          <Heros filterGenre={filterGenre} heros={musicHeros} />
          <h2 className="text-center font-barlow text-5xl font-medium pt-5">
            Sanatçılar
          </h2>
          <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-center mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-5">
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
            {music.map((item) => (
              <div className="w-60 relative shadow-2xl" key={item.id}>
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
      {musicGenre && (
        <div>
          <Heros filterGenre={filterGenre} heros={musicHeros} />
          <h2 className="text-center font-barlow text-5xl font-medium pt-5">
            {titleGenre}
          </h2>
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
          <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-center mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
            {musicGenre.map((item) => (
              <div className="w-60 relative shadow-2xl" key={item.id}>
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

export default Musics;
