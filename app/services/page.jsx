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
import { Icons } from "@/components/icons";
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

  const serviceData = [
    {
      icon: <Icons.announcement width={100} height={100} />,
      title: "Marketing Services",
      text: 'Progressively empower business "outside the box" thinking with resource-leveling partnerships.',
    },
    {
      icon: <Icons.bulb width={100} height={100} />,
      title: "Web App Development",
      text: 'Quickly pontificate holistic e-commerce rather than goal web-readiness enhance inexpensive.',
    },
    {
      icon: <Icons.headphone width={100} height={100} />,
      title: "24/7 Call Center Service",
      text: 'Authoritatively reinvent multimedia based niches with global portals orchestrate client-centered.',
    },
    {
      icon: <Icons.bell width={100} height={100} />,
      title: "Social Media Marketing",
      text: 'Assertively leverage other standardized e-services with fully tested e-commerce synergistic.',
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

      <section className={styles.weProvideMain}>
        <div className="container">
          <h1 className="title-heading text-center">
            We Provide Quality Services
          </h1>
          <p className="sb-heading text-center col-md-8 m-auto">
            Efficiently aggregate end-to-end core competencies without
            maintainable. Dynamically foster tactical solutions without enabled
            value.
          </p>

          <div className="row mt-5">
            {serviceData.map((item, key) => (
              <div className="col-md-6" key={key}>
                <div className={styles.provideBox}>
                  <div className={styles.icon}>{item.icon}</div>
                  <div className={styles.details}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link href="/">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
