"use client";

import { FaHandPointUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`${isVisible ? "opacity-100" : "opacity-0"} ${
        styles.scrollTop
      }`}
      onClick={scrollToTop}
    >
      <FaHandPointUp size={18} />
    </button>
  );
};

export default ScrollToTopButton;
