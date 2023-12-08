import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const CustomBanner = ({title, pageName}) => {
  return (
    <div className={styles.customBanner}>
      <div className={styles.bannerCols}>
        <div class="col-md-7 m-auto">
          <div class="page-header-content text-center">
            <h1>{title}</h1>
            <nav class="d-flex justify-content-center">
              <ol class="breadcrumb breadcrumb-transparent breadcrumb-text-light">
                <li class="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link href="/">Pages</Link>
                </li>
                <li class="breadcrumb-item active">
                  {pageName}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;
