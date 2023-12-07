import React from 'react';
import { IoClose } from "react-icons/io5";
import styles from "./style.module.scss";

const CustomModal = (props) => {
  return (
    <div className={styles.modalMain}>
        <div className={styles.modalContainer}>
          <button onClick={props.closeModal} className={styles.closeModal}><IoClose size={25} /></button>
            <h1 className="text-center">Hello User 1</h1>
        </div>
    </div>
  )
}

export default CustomModal;