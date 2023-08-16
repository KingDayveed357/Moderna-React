import React, { useState, useEffect } from "react";

function Gotop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {showButton && (
        <button
          onClick={topFunction}
          id="myBtn"
          title="Go to top"
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-3  p-2 rounded-lg"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default Gotop;
