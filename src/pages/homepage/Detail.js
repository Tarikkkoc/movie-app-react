import React from "react";

const Detail = ({
  detailMovieImg,
  detailMovieTitle,
  detailMovieRating,
  detailMovieGenre,
  detailSerieImg,
  detailSerieTitle,
  detailSerieRating,
  detailSerieGenre,
  detailMusicImg,
  detailMusicTitle,
  detailMusicGenre,
  detailFilterImg,
  detailFilterTitle,
  detailFilterRating,
  detailFilterGenre,
}) => {
  return (
    <div className="">
      {detailMovieImg && (
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
            <div>
              <img
                className="h-96 rounded-lg shadow-3xl"
                src={detailMovieImg}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {detailSerieImg && (
        <div className="py-10 container max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-5 mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center">
            <div className="flex justify-between mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center mobile:gap-5 tablet:gap-5">
              <h3 className="font-barlow font-bold text-3xl">
                {detailSerieTitle}
              </h3>
              <div className="flex gap-10 text-center font-barlow">
                <div>
                  <strong className="text-xl">IMDB Puanı</strong>
                  <br />
                  <span>{detailSerieRating}/10</span>
                </div>
                <div>
                  <strong className="text-xl">Tür</strong>
                  <br />

                  <span>{detailSerieGenre}</span>
                </div>
              </div>
            </div>
            <div>
              <img
                className="h-96 rounded-lg shadow-3xl"
                src={detailSerieImg}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {detailMusicImg && (
        <div className="py-10 container max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-5 mobile:flex mobile:flex-col mobile:items-center mobile:gap-5 tablet:gap-5 tablet:flex tablet:flex-col tablet:items-center">
            <div className="flex justify-between mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center mobile:gap-5 tablet:gap-5">
              <h3 className="font-barlow font-bold text-3xl">
                {detailMusicTitle}
              </h3>
              <div className="text-center font-barlow">
                <strong className="text-xl">Tür</strong>
                <br />
                <span>{detailMusicGenre}</span>
              </div>
            </div>
            <div>
              <img
                className="h-96 rounded-lg shadow-3xl"
                src={detailMusicImg}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {detailFilterImg && (
        <div className="py-10 container max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-5 mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center">
            <div className="flex justify-between mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center mobile:gap-5 tablet:gap-5">
              <h3 className="font-barlow font-bold text-3xl">
                {detailFilterTitle}
              </h3>
              <div className="flex gap-10 text-center font-barlow">
                <div>
                  <strong className="text-xl">IMDB Puanı</strong>
                  <br />
                  <span>{detailFilterRating}/10</span>
                </div>
                <div>
                  <strong className="text-xl">Tür</strong>
                  <br />

                  <span>{detailFilterGenre}</span>
                </div>
              </div>
            </div>
            <div>
              <img
                className="h-96 rounded-lg shadow-3xl"
                src={detailFilterImg}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
