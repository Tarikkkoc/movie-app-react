import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddSerie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState();
  const [genre, setGenre] = useState("");
  const [matter, setMatter] = useState("");

  const handleAdd = () => {
    const addSerie = {
      title: title,
      img: img,
      rating: rating,
      genre: genre,
      matter: matter,
    };
    fetch("http://localhost:5000/series", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addSerie),
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire("Dizi ekleme işlemi başarılı", "", "success");
          navigate("/admin-serie");
        } else {
          Swal.fire("Dizi eklenirken bir sorun oluştu", "error");
        }
      })
      .catch((error) => {
        console.error("Veri kaydedilirken bir hata oluştu", error);
      });
  };
  return (
    <div className="container max-w-6xl mx-auto px-4 pt-8 h-screen grid place-items-center">
      <div className="grid place-items-center">
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="">
            <img
              className="max-w-[100px] w-full"
              src="/img/register.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 rounded-xl"
                placeholder="Dizi Adı"
                type="text"
              />
            </div>
            <div>
              <input
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="p-2 rounded-xl"
                placeholder="Resim (Url olarak girin)"
                type="text"
              />
            </div>
            <div>
              <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="p-2 rounded-xl"
                placeholder="IMDB Puanı"
                type="text"
              />
            </div>
            <div>
              <input
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="p-2 rounded-xl"
                placeholder="Dizinin Türü"
                type="text"
              />
            </div>
            <div>
              <input
                value={matter}
                onChange={(e) => setMatter(e.target.value)}
                className="p-2 rounded-xl"
                placeholder="Dizinin Konusu"
                type="textarea"
              />
            </div>
            <div
              onClick={handleAdd}
              className="w-full bg-slate-500 hover:bg-slate-400 cursor-pointer text-center rounded-xl"
            >
              <button className="py-1">Dizi Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSerie;
