import React, { useEffect, useRef, useState } from "react";

const SuccessStoriesSection = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    showSlides(slideIndex);
    showSliders();

    // Clearing the interval on component unmount to prevent memory leaks
    return () => {
      clearTimeout(slidersTimeout);
    };
  }, [slideIndex]);

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    let slides = slidesRef.current.getElementsByClassName("mySlides");
    let dots = dotsRef.current.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  let slidersTimeout;
  function showSliders() {
    let i;
    let slides = slidesRef.current.getElementsByClassName("mySlides");
    let dots = dotsRef.current.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    setSlideIndex((prevIndex) => prevIndex + 1);
    if (slideIndex > slides.length) {
      setSlideIndex(1);
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    slidersTimeout = setTimeout(showSliders, 5000);
  }

  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-blend-multiply"
      id="sec"
    >
      <div className="px-5 grid lg:grid-cols-2 gap-8 lg:gap-16 mx-auto max-w-screen-xl text-center py-24 lg:py-24">
        <div className="slideshow-container" ref={slidesRef}>
          {/* Slides and content go here */}
        </div>
        <div ref={dotsRef}>
          <div className="flex space-x-3">
            <i
              className="dot bi-circle-fill text-xs"
              onClick={() => currentSlide(1)}
            ></i>
            <i
              className="dot bi-circle-fill text-xs"
              onClick={() => currentSlide(2)}
            ></i>
            <i
              className="dot bi-circle-fill text-xs"
              onClick={() => currentSlide(3)}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
