"use client";

import React from "react";
import { FaBrain, FaConfluence, FaBriefcase } from "react-icons/fa";
import CountUp from "react-countup";
import PrimaryCard from "@/components/primaryCard";
import { CustomImage } from "@/components/ui/customImage";
import CustomTab from "@/components/ui/customTab";
import Achievement from "@/components/achievement";
import styles from "./style.module.scss";

const HomePage = () => {
  const counter = [
    {
      number: <CountUp start={0} end={100} duration={10} />,
      title: "Happy Clients",
    },
    {
      number: <CountUp start={0} end={60} duration={10} />,
      title: "Win Awards",
    },
    {
      number: <CountUp start={0} end={555} duration={10} />,
      title: "Dedicated Support",
    },
    {
      number: <CountUp start={0} end={200} duration={10} />,
      title: "Client Testimonials",
    },
  ];

  const services = [
    {
      src: "/images/icon-2.svg",
      title: "Financial Planning",
      cardText:
        "You can never go wrong with our own top-notch dedicated servers loaded",
    },
    {
      src: "/images/icon-1.svg",
      title: "Business Growth",
      cardText:
        "We can guarantee an excellent experience and loading time for your successful",
    },
    {
      src: "/images/icon-3.svg",
      title: "Saving Strategy",
      cardText:
        "With full root access you will be able to take full control of your server very easy",
    },
    {
      src: "/images/icon-4.svg",
      title: "Total Marketing Solutions",
      cardText:
        "Our VPS hosting plan is fully packed with dedicated IPv6 Internet protocol IP",
    },
    {
      src: "/images/icon-6.svg",
      title: "Total SEO Solutions",
      cardText:
        "If you’re not 100% satisfied with Hostlar, we’ll refund your payment no risk",
    },
    {
      src: "/images/icon-8.svg",
      title: "Business Security",
      cardText:
        "One of many premium features is a dedicated IP cheapest VPS hosting plan",
    },
  ];

  const doesWork = [
    {
      className: "icon-primary",
      icon: <FaBrain size={35} />,
      cardTitle: "Generate Ideas",
      cardText:
        "Appropriately restore mission-critical strategic theme areas rather than visionary ideas.",
    },
    {
      className: "icon-secondry",
      icon: <FaConfluence size={35} />,
      cardTitle: "Create Design",
      cardText:
        "Quickly redefine granular schemas after top-line total linkage. Appropriately foster team driven.",
    },
    {
      className: "icon-third",
      icon: <FaBriefcase size={35} />,
      cardTitle: "Launch Project",
      cardText:
        "Seamlessly deploy impactful schemas without initiatives. Interactively utilize scalable initiatives.",
    },
  ];

  return (
    <div>
      <section className={styles.banner}>
        <video
          src="/video/corporate.mp4"
          autoPlay
          type="video/mp4"
          muted
          loop
        />

        <div className={styles.bannerFigure}>
          <h1>We Are Creative Corporate & Marketing Agency</h1>
          <p>
            We offer digital marketing agency. Find here details about our
            company.Completely pontificate methodologies with viral sources
            cross-unit action.
          </p>

          <div className={styles.counterCols}>
            {counter.map((item, key) => (
              <div className={styles.counterBox} key={key}>
                <div className={styles.number}>{item.number}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.doesWork}>
        <div className="container">
          <div className="col-md-7 m-auto">
            <h2 className="text-center title-heading">How Does it Work?</h2>
            <p className="text-center sb-heading">
              Distinctively grow go forward manufactured products and
              enthusiastically disseminate outsourcing customer service.
            </p>
          </div>
          <div className="row justify-content-center pt-5">
            {doesWork.map((item, key) => (
              <div className="col-md-4" key={key}>
                <PrimaryCard
                  className={item.className}
                  cardIcon
                  icon={item.icon}
                  cardTitle={item.title}
                  cardText={item.cardText}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutMain}>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-5">
              <div className={styles.aboutBg}>
                <div className={styles.circleImg}>
                  <CustomImage
                    src="/images/color-shape.svg"
                    width={280}
                    height={337}
                    alt=""
                  />
                </div>
                <div className={styles.fancyImg}>
                  <CustomImage
                    src="/images/about-us.jpg"
                    width={506}
                    height={587}
                    alt=""
                  />
                </div>
                <div className={styles.dottedImg}>
                  <CustomImage
                    src="/images/dot-shape.png"
                    width={280}
                    height={337}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h3 className="title-heading">About Us</h3>
              <p>
                Credibly grow multifunctional customer service through team
                driven scenarios. Rapidiously disintermediate end-to-end
                e-business after goal-oriented partnerships. Professionally
                incentivize scalable expertise before strategic intellectual.
              </p>

              <CustomTab />
            </div>
          </div>
        </div>
      </section>

      <Achievement />

      <section className={`${styles.doesWork} pb-4`}>
        <div className="container">
          <div className="col-md-7 m-auto">
            <h4 className="text-center title-heading">Best Quality Services</h4>
            <p className="text-center sb-heading">
              Efficiently aggregate core competencies without maintainable
              ideas. Dynamically foster tactical solutions without enabled
              value.
            </p>
          </div>
          <div className="row justify-content-center pt-5">
            {services.map((item, key) => (
              <div className="col-md-4 mb-5" key={key}>
                <PrimaryCard
                  cardImage
                  imgWidth={60}
                  imgHeight={60}
                  alt="not found"
                  src={item.src}
                  cardTitle={item.title}
                  cardText={item.cardText}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
