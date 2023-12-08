"use client";

import { useState } from "react";
import CustomBanner from "@/components/ui/customBanner";
import CustomCard from "@/components/ui/customCard";
import CustomModal from "@/components/ui/modal";
import Loader from "@/components/ui/loader";

import styles from "./style.module.scss";

const AboutUs = () => {
  const [showModal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const modalToggle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setModal(true);
    }, 1000);
  };

  const teamMember = [
    {
      src: "/images/team-1.jpg",
      name: "John Q. Public",
      position: "Developer",
    },
    {
      src: "/images/team-2.jpg",
      name: "Madurai Mani Iyer",
      position: "Lead Developer",
    },
    {
      src: "/images/team-3.jpg",
      name: "Maria J. Go",
      position: "Support Engineer",
    },
    {
      src: "/images/team-4.jpg",
      name: "John Q. Public",
      position: "Developer",
    },
  ];

  return (
    <div>
      <CustomBanner title="About Us" pageName="About Us" />

      <section className={styles.aboutUs}>
        <div className="container">
          <div className="col-md-7 m-auto">
            <h2 className="text-center title-heading">Meet our lovely team</h2>
            <p className="text-center sb-heading">
              Dynamically pursue reliable convergence rather than 24/7 process
              improvements develop end-to-end customer service.
            </p>
          </div>
          <div className="row mt-5">
            {teamMember.map((item, key) => (
              <div className="col-md-3" key={key}>
                <button onClick={modalToggle}>
                  <CustomCard
                    cardImg={item.src}
                    teamName={item.name}
                    teamPosition={item.position}
                    onClick={modalToggle}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && <CustomModal closeModal={()=>setModal(false) } />}

      {isLoading && <Loader />}
    </div>
  );
};

export default AboutUs;
