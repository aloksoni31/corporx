import React from "react";
import styles from "./style.module.scss";
import { CustomImage } from "../ui/customImage";

const PrimaryCard = (props) => {
  return (
    <div className={styles.primaryCard}>
      {props.cardImage && (
        <div className={styles.cardImg}>
          <CustomImage
            src={props.src}
            width={props.imgWidth}
            height={props.imgHeight}
            alt={props.alt}
          />
        </div>
      )}
      {props.cardIcon && (
        <div>
          <div className={`${styles.cardIcon} ${props.className}`}>
            {props.icon}
          </div>
        </div>
      )}
      <div className={styles.cardTitle}>{props.cardTitle}</div>
      <p>{props.cardText}</p>
    </div>
  );
};

export default PrimaryCard;
