import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaYoutube, FaDribbble } from "react-icons/fa";
import { CustomImage } from "@/components/ui/customImage";
import Consulting from "@/components/consulting";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <>
    <Consulting />
    <footer className={styles.footerMain}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={styles.footLogo}>
              <CustomImage
                src="/images/logo-white.png"
                width={175}
                height={35}
                alt=""
              />
            </div>
            <p className="mt-3 mb-3">
              Interactively unleash interactive best practices before
              technically sound portals.
            </p>
            <div className={styles.footSocial}>
              <Link href="/" className={styles.twitter} title="Twitter">
                <FaTwitter />
              </Link>
              <Link href="/" className={styles.facebook} title="Facebook">
                <FaFacebookF />
              </Link>
              <Link href="/" className={styles.youtube} title="Youtube">
                <FaYoutube />
              </Link>
              <Link href="/" className={styles.doribble} title="Dribbble">
                <FaDribbble />
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className={styles.title}>Company</div>
            <ul>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Customers</Link>
              </li>
              <li>
                <Link href="/">Community</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className={styles.title}>Resources</div>
            <ul>
              <li>
                <Link href="/">Help</Link>
              </li>
              <li>
                <Link href="/">Events</Link>
              </li>
              <li>
                <Link href="/">Live sessions</Link>
              </li>
              <li>
                <Link href="/">Open sources</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className={styles.title}>Support</div>
            <ul>
              <li>
                <Link href="/">Help</Link>
              </li>
              <li>
                <Link href="/">Tech Support</Link>
              </li>
              <li>
                <Link href="/">Network Status</Link>
              </li>
              <li>
                <Link href="/">Contact Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyRight}>
        Copyrights © 2023. All rights reserved by <span>ThemeTags</span>
      </div>
    </footer>
    </>
  );
};

export default Footer;
