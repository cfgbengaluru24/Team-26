import React from "react";
import { MdCurrencyRupee, MdLocationOn } from "react-icons/md";
import styles from "./JobDescSidePanel.module.css";
import { CircularProgress } from "@mui/material";
// import { FindJobDash } from "./FindJobDash";

const JobDescSidePanel = ({ selectedJob }) => {
  return (
    <div className={styles.box}>
      {/* {!selectedJob && <FindJobDash />} */}
      {selectedJob ? (
        <div className={styles.panel}>
          <div className={styles.jobDetails}>
            <div className={styles.jobTitle}>{selectedJob.eventName}</div>
            {/* <div className={styles.jobCompany}><u>{selectedJob.eventDate}</u></div> */}
            <div className={styles.jobLocation}>
              <MdLocationOn style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} />
              {selectedJob.location}
            </div>
            <div className={styles.jobLocation}>
              {/* <MdCurrencyRupee style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} /> */}
              {selectedJob.eventDate}
            </div>
          </div>
          <button className={styles.applyButton} disabled={false} onClick={() => alert('Applied')}>Apply</button>
          <p>Details about the event will be shown here.</p>
        </div>
      ) : (
        <div className={styles.loadingSpinner}><CircularProgress /></div>
      )}
    </div>
  );
};

export default JobDescSidePanel;
