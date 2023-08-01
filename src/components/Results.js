import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const Results = ({
  filteredMovies,
  openFilter,
  handleOpenFilter,
  handleCloseFilter,
  selectedFilterImg,
  selectedFilterTitle,
  detailFilter,
}) => {
  const [clicked, setClicked] = useState([]);

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
    <div className="py-5 container max-w-6xl mx-auto px-4">
      <h2 className="text-center font-barlow text-5xl font-medium pt-5">
        Sonuçlar
      </h2>
      <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-center mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
        <Modal
          keepMounted
          open={openFilter}
          onClose={handleCloseFilter}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            {selectedFilterImg && (
              <div className="flex gap-5">
                <img className="w-1/2" src={selectedFilterImg} />
                <div className="flex flex-col gap-2">
                  <div className="text-black text-2xl font-semibold font-barlow">
                    {selectedFilterTitle}
                  </div>
                  <div>
                    <p>Filmin konusu eklenince burada yer alacak.</p>
                  </div>
                  <button onClick={detailFilter}>detay</button>
                </div>
              </div>
            )}
          </Box>
        </Modal>
        {filteredMovies.map((item) => (
          <div className="w-60 relative shadow-2xl" key={item.id}>
            <img
              onClick={() =>
                handleOpenFilter(item.img, item.title, item.rating, item.genre)
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
  );
};

export default Results;
