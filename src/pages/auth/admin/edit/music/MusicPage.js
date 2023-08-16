import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MusicPage = ({
  detailMusicImg,
  detailMusicTitle,
  detailMusicRating,
  detailMusicGenre,
  detailMusicMatter,
}) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    Swal.fire({
      title: "Emin misiniz?",
      text: "Bu işlem geri alınamaz!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/musics/${detailMusicTitle}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            if (res.ok) {
              Swal.fire(
                "Sanatçı işlemi başarılı!",
                "Sanatçı başarıyla silindi.",
                "success"
              );
              navigate("/admin-music");
            } else {
              Swal.fire("Hata!", "Sanatçı silinemedi.", "error");
            }
          })
          .catch((error) => {
            Swal.fire("Hata!", "Veri silinirken bir hata oluştu.", "error");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("İptal edildi", "İçerik güvende :)", "info");
      }
    });
  };

  return (
    <div>
      <div className="py-10 container max-w-6xl mx-auto px-4">
        <div className="flex text-white flex-col gap-5 mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center">
          <div className="flex justify-between mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-col tablet:items-center mobile:gap-5 tablet:gap-5">
            <h3 className="font-barlow font-bold text-3xl">
              {detailMusicTitle}
            </h3>
            <div className="flex gap-10 text-center font-barlow">
              <div>
                <strong className="text-xl">IMDB Puanı</strong>
                <br />
                <span>{detailMusicRating}/10</span>
              </div>
              <div>
                <strong className="text-xl">Tür</strong>
                <br />

                <span>{detailMusicGenre}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-10 font-barlow mobile:flex mobile:flex-col tablet:flex tablet:flex-col">
            <img
              className="h-96 rounded-lg shadow-3xl"
              src={detailMusicImg}
              alt=""
            />
            <div>
              <p>{detailMusicMatter}</p>
            </div>
          </div>
        </div>
        <div className="pt-5 flex gap-3">
          <Link to="/update-music">
            <div className="w-32 py-3 text-center rounded-xl font-barlow text-xl text-white cursor-pointer bg-blue-800 hover:bg-blue-400">
              Güncelle
            </div>
          </Link>
          <div
            onClick={handleDelete}
            className="w-28 py-3 text-center rounded-xl font-barlow text-xl text-white cursor-pointer bg-red-800 hover:bg-red-400"
          >
            Sil
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
