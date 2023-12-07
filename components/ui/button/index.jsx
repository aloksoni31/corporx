import React from "react";
import styles from "./style.module.scss";

const PrimaryButton = ({ title, disabled, onClick }) => {
  return (
    <div className={styles.primaryBtn}>
      <button disabled={disabled} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
