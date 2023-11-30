import React from "react";
import { FaUserAlt, FaEye, FaTrophy, FaMedal } from "react-icons/fa";
import styles from "./style.module.scss";

const Achievement = () => {
  const achievement = [
    {
      icon: <FaUserAlt size={35} />,
      number: "6423",
      title: "Active users",
    },
    {
      icon: <FaEye size={35} />,
      number: "2400",
      title: "Global client",
    },
    {
      icon: <FaTrophy size={35} />,
      number: "6423",
      title: "Win award",
    },
    {
      icon: <FaMedal size={35} />,
      number: "1450",
      title: "Clients satisfaction",
    },
  ];

  return (
    <section className={styles.achievementMain}>
      <div className={styles.achievementBox}>
        <div className="container">
          <div className="row justify-content-center">
            {achievement.map((item, key) => (
              <>
                <div className="col-md-3">
                  <div className={styles.achievementCols}>
                    <div className={styles.achievementIcon}>{item.icon}</div>
                    <div className={styles.achievementNumber}>
                      {item.number}
                    </div>
                    <div className={styles.achievementTitle}>{item.title}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
