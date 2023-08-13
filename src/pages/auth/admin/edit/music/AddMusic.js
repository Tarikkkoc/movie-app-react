import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddMusic = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState();
  const [genre, setGenre] = useState("");
  const [matter, setMatter] = useState("");

  const handleAdd = () => {
    const addMusic = {
      title: title,
      img: img,
      rating: rating,
      genre: genre,
      matter: matter,
    };
    fetch("http://localhost:5000/musics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addMusic),
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire("Sanatçı ekleme işlemi başarılı", "", "success");
          navigate("/admin-music");
        } else {
          Swal.fire("Sanatçı eklenirken bir sorun oluştu", "error");
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
                placeholder="Sanatçının Adı"
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
                placeholder="Sanatçı Puanı"
                type="text"
              />
            </div>
            <div>
              <input
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="p-2 rounded-xl"
                placeholder="Tarzı"
                type="text"
              />
            </div>
            <div>
              <input
                value={matter}
                onChange={(e) => setMatter(e.target.value)}
                className="p-2 rounded-xl"
                placeholder="Popüler Şarkıları"
                type="textarea"
              />
            </div>
            <div
              onClick={handleAdd}
              className="w-full bg-slate-500 hover:bg-slate-400 cursor-pointer text-center rounded-xl"
            >
              <button className="py-1">Sanatçı Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMusic;
