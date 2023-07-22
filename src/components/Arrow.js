import React from "react";

const Arrow = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div onClick={toTop}>
      <img
        className="w-12 cursor-pointer opacity-50 hover:opacity-100"
        src="/img/up.svg"
        alt=""
      />
    </div>
  );
};

export default Arrow;
