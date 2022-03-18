import "./carousel-style.css";
import React, { useState } from "react";

export default function Carousel({ slidesArr, initialActiveId }) {
  const INITIAL_ACTIVE_ID = initialActiveId;
  const [active, setActive] = useState(INITIAL_ACTIVE_ID);

  function nextSlide() {
    if (active === slidesArr.length) {
      setActive(INITIAL_ACTIVE_ID);
    } else {
      setActive((prev) => prev + 1);
    }
  }

  function prevSlide() {
    if (active == INITIAL_ACTIVE_ID) {
      setActive(slidesArr.length);
    } else {
      setActive((prev) => prev - 1);
    }
  }

  const slides = slidesArr.map((item) => {
    return (
      <div
        key={item.id}
        className={`slide
        ${
          active === item.id
            ? "active"
            : item.id === active - 1 ||
              (active === INITIAL_ACTIVE_ID && item.id === slidesArr.length)
            ? "prev"
            : item.id === active + 1 ||
              (active === slidesArr.length && item.id === INITIAL_ACTIVE_ID)
            ? "next"
            : "noactive"
        }`}
        key={item.id}
        onClick={
          item.id === active - 1 ||
          (active === INITIAL_ACTIVE_ID && item.id === slidesArr.length)
            ? prevSlide
            : item.id === active + 1 ||
              (active === slidesArr.length && item.id === INITIAL_ACTIVE_ID)
            ? nextSlide
            : undefined
        }
      >
        {item.content}
      </div>
    );
  });

  return (
    <>
      <div className="slider">{slides}</div>
    </>
  );
}
