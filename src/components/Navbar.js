import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  currentUser,
  searchTerm,
  setSearchTerm,
  filteredMovies,
  admin,
}) => {
  const [search, setSearch] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };
  const handleSearch = () => {
    setSearch((prevState) => !prevState);
  };

  const goResults = () => {
    setSearch((prevState) => !prevState);
    navigate("/search-results");
  };
  return (
    <div className="bg-darkHorizon">
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center ">
        <div>
          <Link to="/">
            <img className="h-14 shrink-1 my-2" src="/img/logo2.svg" alt="" />
          </Link>
        </div>
        <div className="flex gap-8 tablet:hidden mobile:hidden">
          <ul className="flex justify-between font-barlow text-lg gap-10 items-center text-blue-50">
            <Link to="/movies">
              <li className="cursor-pointer p-2 rounded-xl hover:bg-blue-200 hover:text-black">
                Movies
              </li>
            </Link>
            <Link to="/series">
              <li className="cursor-pointer p-2 rounded-xl hover:bg-blue-200 hover:text-black">
                Series
              </li>
            </Link>
            <Link to="/musics">
              <li className="cursor-pointer p-2 rounded-xl hover:bg-blue-200 hover:text-black">
                Musics
              </li>
            </Link>
            <Link to="/my-account">
              <li className="cursor-pointer p-2 rounded-xl hover:bg-blue-200 hover:text-black">
                Hesabım
              </li>
            </Link>
            {admin && (
              <div className="flex gap-8">
                <Link to="/admin-panel">
                  <li className="cursor-pointer p-2 rounded-xl hover:bg-blue-200 hover:text-black">
                    Admin
                  </li>
                </Link>
              </div>
            )}
            {
              (!currentUser,
              !admin && (
                <div className="flex gap-8">
                  <Link to="/login">
                    <li className="cursor-pointer p-2 rounded-xl hover:bg-blue-200 hover:text-black">
                      Login
                    </li>
                  </Link>
                </div>
              ))
            }
          </ul>
          <img
            className="h-8 bg-gray-300 rounded-xl shrink-1 mt-1-5 cursor-pointer"
            onClick={handleSearch}
            src="/img/search.svg"
            alt=""
          />
        </div>
        <div className="hidden tablet:flex tablet:gap-4 mobile:flex mobile:gap-4">
          <img
            className="h-8 shrink-1 mt-1-5 cursor-pointer"
            onClick={handleSearch}
            src="/img/search.svg"
            alt=""
          />
          <button
            type="button"
            className="text-white text-2xl pr-3 ml-3"
            onClick={handleClick}
          >
            ☰
          </button>
        </div>
      </div>
      {search && (
        <div id="search-bar" className="flex gap-5 py-5 justify-center">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search"
            className="bg-blue-100 p-2 rounded-xl"
          />
          <button
            onClick={goResults}
            className="cursor-pointer p-2 rounded-xl bg-blue-500 hover:bg-blue-200 hover:text-black text-white"
          >
            Search
          </button>
        </div>
      )}
      {isDrawerOpen && (
        <div className="fixed h-screen w-screen bg-black/40 z-10 right-0 left-0 top-0 bottom-0">
          <div className="w-[320px] z-20 right-0 top-0 bottom-0 py-[90px] px-[30px] h-screen fixed bg-blue-50 overflow-y-auto">
            <button
              className="bg-blue-900 text-white rounded-xl w-10 h-10 fixed top-5 right-5"
              onClick={handleClick}
            >
              X
            </button>
            <ul className="flex flex-col justify-center items-center gap-10 font-barlow text-xl">
              <Link onClick={handleClick} to="/movies">
                <li>Movies</li>
              </Link>
              <Link onClick={handleClick} to="/series">
                <li>Series</li>
              </Link>
              <Link onClick={handleClick} to="/musics">
                <li>Musics</li>
              </Link>
              <Link onClick={handleClick} to="/my-account">
                <li>Hesabım</li>
              </Link>
              {admin && (
                <div className="flex flex-col gap-8">
                  <Link onClick={handleClick} to="/admin-panel">
                    <div className="grid place-items-center">
                      <button className="bg-blue-600 hover:bg-blue-400 rounded-full px-6 py-3 text-white">
                        Admin
                      </button>
                    </div>
                  </Link>
                </div>
              )}
              {
                (!currentUser,
                !admin && (
                  <div className="flex flex-col gap-8">
                    <Link onClick={handleClick} to="/login">
                      <div className="grid place-items-center">
                        <button className="bg-blue-600 hover:bg-blue-400 rounded-full px-6 py-3 text-white">
                          Giriş Yap
                        </button>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
