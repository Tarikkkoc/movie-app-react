import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const EditSerie = ({
  handleOpenSerie,
  openSerie,
  handleCloseSerie,
  selectedSerieImg,
  selectedSerieTitle,
  editSerie,
}) => {
  const [serie, setSerie] = useState([]);

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
    fetch("http://localhost:5000/series")
      .then((res) => res.json())
      .then((series) => {
        setSerie(series);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container max-w-6xl mx-auto px-4 text-white">
      <div className="flex justify-between pt-5 px-5 mobile:flex mobile:flex-col mobile:items-center mobile:gap-5">
        <h2 className="text-center font-barlow text-5xl font-medium">
          Diziler
        </h2>
        <Link to="/add-serie">
          <div className="text-center cursor-pointer rounded-lg w-20 text-white bg-green-600 hover:bg-green-500 font-barlow text-lg font-medium mobile:py-1 pt-2.5 px-3">
            Ekle
          </div>
        </Link>
      </div>
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
                  </div>
                  <div>
                    <button
                      className="w-20 p-2 bg-blue-900 text-white font-barlow rounded-xl hover:bg-blue-500"
                      onClick={editSerie}
                    >
                      Düzenle
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
  );
};

export default EditSerie;
