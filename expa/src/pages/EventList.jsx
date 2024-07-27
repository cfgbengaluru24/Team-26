import React from "react";
import { MdLocationPin } from "react-icons/md";

import styles from "./EventList.module.css";
import { Accordion, AccordionDetails, AccordionSummary, CircularProgress } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import cadet from "../assets/cadet.png"
// import JobDescSidePanel from "./JobDescSidePanel";

const EventList = (props) => {
  const eventItems = props.eventItems;
  const isMobileScreen = false;
  return (
    <div className={styles.box}>
      {eventItems ? eventItems.map((e) => {
        if (!isMobileScreen)
          return (
            <div  className={ `${styles.jobTile} ${styles.selected}`}>
              <img src={cadet} style={{ height: "10vh", objectFit: "contain", aspectRatio: "1/1", marginRight: "20px" }} />
              <div style={{ flex: 3, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly", width: "50%" }}>
                  <p style={{ margin: "0px", color: "grey" }}>{e.eventName}</p>
                  <p style={{ margin: "0px", color: "rgb(34,71,82)" }}>Date: {e.eventDate}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly" }}>
                  <span>
                    <MdLocationPin color="grey" />
                    <span style={{ color: "grey" }}>Location</span>
                  </span>
                  <p style={{ margin: "0px" }}>{e.location}</p>
                </div>
              </div>
            </div>
          )
        else
          return (
            <Accordion className={styles.accordion}>
              <AccordionSummary expandIcon={<ExpandMore fontSize='large' />}>
                <div className={styles.jobTile}>
                  {/* <img src={e.iconUrl} style={{ height: "10vh", objectFit: "contain", aspectRatio: "1/1", marginRight: "20px" }} /> */}
                  <div style={{ flex: 3, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly", width: "50%" }}>
                      <p style={{ margin: "0px", color: "grey" }}>{e.eventName}</p>
                      <p style={{ margin: "0px", color: "rgb(34,71,82)" }}>{e.eventDate}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly" }}>
                      <span>
                        <MdLocationPin color="grey" />
                        <span style={{ color: "grey" }}>Location</span>
                      </span>
                      <p style={{ margin: "0px" }}>{e.location}</p>
                    </div>
                  </div>
                </div>
              </AccordionSummary>
              {/* <AccordionDetails>
                <JobDescSidePanel isMobileScreen={isMobileScreen} expandedJob={e} />
              </AccordionDetails> */}
            </Accordion>
          )
      }) : <CircularProgress />}
    </div>
  )

}

export default EventList;