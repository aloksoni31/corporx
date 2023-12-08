import React from 'react';
import styles from "./style.module.scss";

const ServiceDescription = ({title, text}) => {
  return (
    <div className={styles.serviceText}>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default ServiceDescription;
