import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

const Homepage = () => {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);
  const [music, setMusic] = useState([]);
  const [clickedItemIds, setClickedItemIds] = useState([]);

  const handleClick = (itemTitle) => {
    alertify.notify("Success notification message.");
    if (clickedItemIds.includes(itemTitle)) {
      setClickedItemIds(clickedItemIds.filter((title) => title !== itemTitle));
    } else {
      setClickedItemIds([...clickedItemIds, itemTitle]);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((movies) => {
        setMovie(movies);
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:3000/series")
      .then((res) => res.json())
      .then((series) => {
        setSerie(series);
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:3000/musics")
      .then((res) => res.json())
      .then((musics) => {
        setMusic(musics);
      })
      .catch((error) => console.log(error));
    alertify.set("notifier", "position", "bottom-right");
  }, []);

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-center font-barlow text-5xl font-medium pt-5">
        Filmler
      </h2>
      <div className="grid grid-cols-3 gap-x-32 gap-y-10 place-items-center place-content-center mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-y-5 tablet:gap-x-0 mobile:grid mobile:grid-cols-1 mobile:gap-y-5 mobile:gap-x-0">
        {movie.map((item) => (
          <div className="w-60 relative shadow-2xl" key={item.id}>
            <img
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
        {serie.map((item) => (
          <div className="w-60 relative shadow-2xl" key={item.id}>
            <img
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
        {music.map((item) => (
          <div className="w-60 relative shadow-2xl" key={item.id}>
            <img
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
