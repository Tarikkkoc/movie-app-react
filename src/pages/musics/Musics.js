import React, { useEffect, useState } from "react";
import Heros from "../hero/Hero";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { css, styled } from "@emotion/css";

const Musics = () => {
  const musicHeros = [
    "Aksiyon",
    "Macera",
    "Korku",
    "Dram",
    "Suç",
    "Romantik",
    "Aile",
    "Fantastik",
    "Animasyon",
    "Çocuk",
    "Tarih",
    "Gerilim",
    "Animasyon",
    "Çocuk",
    "Tarih",
    "Gerilim",
  ];
  const [music, setMusic] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [openMusic, setOpenMusic] = useState(false);
  const [selectedMusicImg, setSelectedMusicImg] = useState(null);
  const [selectedMusicTitle, setSelectedMusicTitle] = useState(null);
  const handleOpenMusic = (img, title) => {
    setOpenMusic(true);
    setSelectedMusicImg(img);
    setSelectedMusicTitle(title);
  };

  const handleCloseMusic = () => {
    setOpenMusic(false);
  };
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
  return (
    <div className="container max-w-6xl mx-auto px-4">
      <Heros heros={musicHeros} />
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
  );
};

export default Musics;
