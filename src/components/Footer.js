import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between gap-32 items-center text-blue-100 tablet:hidden mobile:hidden container max-w-6xl mx-auto px-4 py-5">
        <div className="flex flex-col gap-2">
          <Link to="https://github.com/Tarikkkoc">
            <div className="flex gap-2">
              <img className="w-6" src="/img/github.svg" alt="Github" />
              <span>Github</span>
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/ahmet-tarık-koç-3b952a193/">
            <div className="flex gap-2">
              <img className="w-6" src="/img/linkedin.svg" alt="Linkedin" />
              <span>Linkedin</span>
            </div>
          </Link>
          <Link to="https://www.instagram.com/ahmet_tarik/">
            <div className="flex gap-2">
              <img className="w-6" src="/img/instagram.svg" alt="Instagram" />
              <span>Instagram</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 font-barlow text-xl font-medium">
          <Link to="/movies">
            <span>Movies</span>
          </Link>
          <Link to="/series">
            <span>Series</span>
          </Link>
          <Link to="/musics">
            <span>Musics</span>
          </Link>
        </div>
        <div>© 2023 Created by Tarikkoc.</div>
      </div>
      <div className="container text-blue-50 max-w-6xl mx-auto px-20 py-5 hidden tablet:flex tablet:flex-col tablet:gap-4 mobile:flex mobile:flex-col mobile:gap-4">
        <Disclosure className="bg-white">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2">
                <span>Multimedya Merkezi</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <div className="flex justify-center">
                  <div className="flex flex-col gap-2 font-barlow text-medium font-medium">
                    <Link to="/movies">
                      <span>Movies</span>
                    </Link>
                    <Link to="/series">
                      <span>Series</span>
                    </Link>
                    <Link to="/musics">
                      <span>Musics</span>
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure className="bg-white">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2">
                <span>Sosyal Medya</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <div className="flex justify-center">
                  <div className="flex flex-col justify-center gap-5">
                    <Link to="https://github.com/Tarikkkoc">
                      <div className="flex gap-5">
                        <img
                          className="w-6"
                          src="/img/github.svg"
                          alt="Github"
                        />
                        <span>Github</span>
                      </div>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ahmet-tarık-koç-3b952a193/">
                      <div className="flex gap-5">
                        <img
                          className="w-6"
                          src="/img/linkedin.svg"
                          alt="Linkedin"
                        />
                        <span>Linkedin</span>
                      </div>
                    </Link>
                    <Link to="https://www.instagram.com/ahmet_tarik/">
                      <div className="flex gap-5">
                        <img
                          className="w-6"
                          src="/img/instagram.svg"
                          alt="Instagram"
                        />
                        <span>Instagram</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="text-center">© 2023 Created by Tarikkoc.</div>
      </div>
    </div>
  );
};

export default Footer;
