import React from 'react';
import styles from "./style.module.scss";
import { CustomImage } from '../customImage';

const Loader = () => {
  return (
    <div className={styles.loadingMain}>
        <div className={styles.loadingCols}>
            <CustomImage src="/images/loader.svg" width={150} height={150} alt="" />
            <span>Loading...</span>
        </div>
    </div>
  )
}

export default Loader;
