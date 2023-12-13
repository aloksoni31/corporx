"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CustomImage } from "@/components/ui/customImage";
import Link from "next/link";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header className={scrolled ? styles.scrolled : styles.headerMain}>
      <div className="container">
        <div className={styles.headerFlex}>
          <div className={styles.logo}>
            <Link href="/" title="Corporx">
              <CustomImage
                src="/images/logo-white.png"
                width={150}
                height={30}
                alt="Corporx"
              />
            </Link>
          </div>
          <nav className={isActive ? styles.showNav : null}>
            <ul>
              <li>
                <Link href="/">
                  Home <div className={styles.arrow} />
                </Link>
                <ul className={styles.submenu}>
                  <Link href="">Home 1</Link>
                  <Link href="">Home 2</Link>
                  <Link href="">Home 3</Link>
                  <Link href="">Home 4</Link>
                  <Link href="">Home 5</Link>
                  <Link href="">Home 6</Link>
                </ul>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/">
                  Project <div className={styles.arrow} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  Blog <div className={styles.arrow} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  Contact Us <div className={styles.arrow} />
                </Link>
              </li>
            </ul>
          </nav>
          <div className={isActive ? styles.activeHumburger : null}>
            <button className={styles.navHamburger} onClick={toggleClass}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
