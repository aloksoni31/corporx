"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaUserShield,
  FaLightbulb,
  FaFire,
  FaShapes,
  FaApple,
  FaGooglePlay,
  FaWindows,
} from "react-icons/fa";
import CustomBanner from "@/components/ui/customBanner";
import ServiceDescription from "@/components/services/serviceDescription";
import ServiceBox from "@/components/services/serviceBox";
import styles from "./style.module.scss";

const Services = () => {
  const [current, setCurrent] = useState(0);

  const appBtn = [
    {
      title: "Download on the",
      appName: "App Store",
      icon: <FaApple size={30} />,
      applink: "https://www.apple.com/in/app-store/",
    },
    {
      title: "Download on the",
      appName: "Google Play",
      icon: <FaGooglePlay size={30} />,
      applink: "https://play.google.com/store/games?hl=en_IN&gl=US",
    },
    {
      title: "Download on the",
      appName: "Windows",
      icon: <FaWindows size={30} />,
      applink: "https://apps.microsoft.com/home?hl=en-US&gl=US",
    },
  ];
  return (
    <div>
      <CustomBanner title="Services" pageName="Services" />
      <section className={styles.serviceMain}>
        <div className="container">
          <div className={styles.serviceFlex}>
            <div className={styles.serviceBox}>
              {current === 0 && (
                <ServiceDescription
                  title="World Class Service Growth Your Business"
                  text="Convert your emails into tickets and keep them all organized in one place. Never leave customers questions unanswered."
                />
              )}
              {current === 1 && (
                <ServiceDescription
                  title="World Class Service Growth Your Business 1"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint maiores temporibus facere ipsa, quis omnis quidem accusamus qui quas cum. Quaerat recusandae quidem suscipit aut officia deleniti ipsam esse."
                />
              )}
              {current === 2 && (
                <ServiceDescription
                  title="World Class Service Growth Your Business 2"
                  text="Convert your emails into tickets and keep them all organized in one place. Never leave customers questions unanswered. Convert your emails into tickets and keep them all organized in one place. Never leave customers' questions unanswered."
                />
              )}
              {current === 3 && (
                <ServiceDescription
                  title="World Class Service Growth Your Business 3"
                  text="Convert your emails into tickets and keep them all organized in one place. Never leave customers questions unanswered."
                />
              )}
            </div>
            <div className={styles.serviceBox}>
              <div className={styles.boxFlex}>
                <ServiceBox
                  className="blue"
                  title="Customer service"
                  text="Create low-effort customer service experiences."
                  icon={<FaUserShield size={50} />}
                  onClick={() => setCurrent(0)}
                />
                <ServiceBox
                  className="pink"
                  title="Service to sales"
                  text="Progressively brand clicks-and-mortar."
                  icon={<FaLightbulb size={50} />}
                  onClick={() => setCurrent(1)}
                />
                <ServiceBox
                  className="green"
                  title="Predictive service"
                  text="Proactively develop B2B alignments rather."
                  icon={<FaFire size={50} />}
                  onClick={() => setCurrent(2)}
                />
                <ServiceBox
                  className="darkBlue"
                  title="Make it simple"
                  text="Competently evolve user friendly technology."
                  icon={<FaShapes size={50} />}
                  onClick={() => setCurrent(3)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.appsMain}>
          <video
            src="/video/corporate.mp4"
            autoPlay
            type="video/mp4"
            muted
            loop
          />
          <div className="container">
            <div className={styles.appsFigure}>
              <h2 className="text-center">Download Apps Managing Business</h2>
              <p className="text-center">
                Building your Apps helps attract more potential clients. Our
                integrated marketing team will work high-impact convergence.
              </p>

              <div className={styles.appsCols}>
                {appBtn.map((item, key) => (
                  <div key={key}>
                    <Link href={`${item.applink}`} target="_blank">
                      {item.icon}
                      <span>
                        {item.title} <b>{item.appName}</b>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
