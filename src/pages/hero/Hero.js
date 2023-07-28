import React from "react";

const Hero = ({ heros, filterGenre }) => {
  return (
    <div className="flex flex-wrap justify-center px-2 gap-2 pt-5">
      {heros.map((hero) => (
        <button
          onClick={() => {
            filterGenre(hero.title);
          }}
          className="rounded-xl text-white bg-gray-900 hover:bg-gray-200 hover:text-black px-5 py-1.5 text-center"
        >
          {hero.title}
        </button>
      ))}
    </div>
  );
};

export default Hero;
