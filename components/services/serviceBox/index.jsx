import React from "react";
import styles from "./style.module.scss";

const ServiceBox = ({className, icon, title, text, onClick}) => {
  return (
    <div className={styles.serviceCols}>
      <button className={className} onClick={onClick}>
        <span>
          {icon}
        </span>
        <h2>{title}</h2>
        <p>{text}</p>
      </button>
    </div>
  );
};

export default ServiceBox;
