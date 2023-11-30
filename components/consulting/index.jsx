import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Consulting = () => {
  return (
    <section className={styles.consultingMain}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className={styles.title}>
              Consulting Agency for Your Business
            </div>
            <div>
              Rapidiously engage fully tested e-commerce with progressive
              architectures.
            </div>
          </div>
          <div>
            <Link href="/">Contact With Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
