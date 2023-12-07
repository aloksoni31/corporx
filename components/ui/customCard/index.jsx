import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from "react-icons/fa";
import { CustomImage } from '../customImage';
import styles from "./style.module.scss";

const CustomCard = ({cardImg, teamName, teamPosition}) => {
  return (
    <div className={styles.cardMain}>
        <CustomImage src={cardImg} width={237} height={237} alt="not found" />
        <div className={styles.cardDetails}>
            <div className={styles.title}>{teamName}</div>
            <div className={styles.sbtitle}>{teamPosition}</div>
            <div className={styles.social}>
                <Link href="/" className={styles.facebook}><FaFacebookF size={15} /></Link>
                <Link href="/" className={styles.twitter}><FaTwitter size={15} /></Link>
                <Link href="/" className={styles.youtube}><FaYoutube size={15} /></Link>
                <Link href="/" className={styles.dribbble}><FaDribbble size={15} /></Link>
            </div>
        </div>
    </div>
  )
}

export default CustomCard;