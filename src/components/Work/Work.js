import React, { memo } from "react";
import {
  workWorkForce,
  workEmergencyZone,
  workMRMWebsite,
  workFlixRemote
} from "../../tools/constants";
import WorkBlock from "../Work/WorkBlock";
import styles from "../../App.module.css";
import workStyles from "./Work.module.css";

const Work = memo(() => {
  const createWorkBlock = (contentArray) => {
    let workBlock = contentArray.map((x) => (
      <WorkBlock
        name={x.project}
        mockupImage={x.mockup}
        link={x.link}
        description={x.description}
        mockupImageText={x.altMockupText}
        role={x.role}
        key={x.project}
        imgWidth={x.imgWidth}
        imgHeight={x.imgHeight}
      ></WorkBlock>
    ));
    return workBlock;
  };

  return (
    <div className={workStyles.WorkArea}>
      <div className={styles.ContentArea}>
        <h2>Work</h2>
        <div>
          {createWorkBlock([
            workFlixRemote,
            workMRMWebsite,
            workEmergencyZone,
            workWorkForce
          ])}
        </div>
      </div>
    </div>
  );
});

Work.type.displayName = "WORK";
export default Work;
