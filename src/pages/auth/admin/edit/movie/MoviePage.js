import React from "react";

const MoviePage = ({
  detailMovieImg,
  detailMovieTitle,
  detailMovieRating,
  detailMovieGenre,
  detailMovieMatter,
}) => {
  return (
    <div>
      <div className="py-10 container max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-5 mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center">
          <div className="flex justify-between mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center mobile:gap-5 tablet:gap-5">
            <h3 className="font-barlow font-bold text-3xl">
              {detailMovieTitle}
            </h3>
            <div className="flex gap-10 text-center font-barlow">
              <div>
                <strong className="text-xl">IMDB Puanı</strong>
                <br />
                <span>{detailMovieRating}/10</span>
              </div>
              <div>
                <strong className="text-xl">Tür</strong>
                <br />

                <span>{detailMovieGenre}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-10 font-barlow mobile:flex mobile:flex-col tablet:flex tablet:flex-col">
            <img
              className="h-96 rounded-lg shadow-3xl"
              src={detailMovieImg}
              alt=""
            />
            <div>
              <p>{detailMovieMatter}</p>
            </div>
          </div>
        </div>
        <div className="pt-5 flex gap-3">
          <div className="w-32 py-3 text-center rounded-xl font-barlow text-xl text-white cursor-pointer bg-blue-800 hover:bg-blue-400">
            Güncelle
          </div>
          <div className="w-28 py-3 text-center rounded-xl font-barlow text-xl text-white cursor-pointer bg-red-800 hover:bg-red-400">
            Sil
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
