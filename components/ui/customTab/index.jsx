"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TfiControlForward } from "react-icons/tfi";
import "react-tabs/style/react-tabs.css";
import styles from "./style.module.scss";

const CustomTab = () => {
  return (
    <div className={`${styles.tabDefault} tabDefault`}>
      <Tabs>
        <TabList>
          <Tab>Our History</Tab>
          <Tab>Our Mission</Tab>
          <Tab>Our Vision</Tab>
        </TabList>

        <TabPanel>
          <p>
            Objectively monetize resource sucking testing procedures vis-a-vis
            standards compliant ROI. Proactively disintermediate virtual sources
            before wireless alignments.
          </p>
          <ul className={styles.detailList}>
            <li>
              <TfiControlForward /> <b>Creative</b> Websites Design
            </li>
            <li>
              <TfiControlForward /> <b>Accounting</b> Procedures Guidebook
            </li>
            <li>
              <TfiControlForward /> <b>Cost</b> Accounting Fundamentals
            </li>
            <li>
              <TfiControlForward /> <b>SEO</b> Optimization Services
            </li>
            <li>
              <TfiControlForward /> <b>Company</b> Brand Solutions
            </li>
            <li>
              <TfiControlForward /> <b>45-Day</b> Money-Back Guarantee
            </li>
          </ul>
        </TabPanel>
        <TabPanel>
          <p>
            Proactively unleash orthogonal niches rather than interoperable
            opportunities. Dynamically engage 24/365 materials after high-payoff
            web services. Authoritatively foster diverse potentialities
            vis-a-vis excellent niches.
          </p>
          <p>
            Monotonectally enhance interoperable paradigms via team building
            channels. Phosfluorescently predominate robust services with
            vertical content. Globally network viral innovation without
            prospective resources. Quickly.
          </p>
          <p>
            Competently innovate turnkey channels after proactive methods of
            empowerment. Continually enhance orthogonal experiences via
            bricks-and-clicks potentialities. Energistically evisculate
            enterprise human capital without backward-compatible.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Objectively monetize resource sucking testing procedures vis-a-vis
            standards compliant ROI. Proactively disintermediate virtual sources
            before wireless alignments.
          </p>
          <ul className={styles.detailList}>
            <li>
              <TfiControlForward /> <b>Cost</b> Websites Design
            </li>
            <li>
              <TfiControlForward /> <b>Corporate</b> Procedures Guidebook
            </li>
            <li>
              <TfiControlForward /> <b>Cost</b> Accounting Fundamentals
            </li>
            <li>
              <TfiControlForward /> <b>SEO</b> Optimization Services
            </li>
            <li>
              <TfiControlForward /> <b>Company</b> Brand Solutions
            </li>
            <li>
              <TfiControlForward /> <b>45-Day</b> Money-Back Guarantee
            </li>
          </ul>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CustomTab;
