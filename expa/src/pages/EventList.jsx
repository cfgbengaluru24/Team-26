import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";

import styles from "./EventList.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import cadet from "../assets/cadet.png";
import axios from "axios";
// import JobDescSidePanel from "./JobDescSidePanel";

const EventList = (props) => {
  const [eventItems, setEventItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const trainerid = window.localStorage.getItem("user");
      const response = await axios.get(
        "http://localhost:5000/event/filteredEvents/" + trainerid
      );
      setEventItems(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  // const eventItems = props.eventItems;

  const isMobileScreen = false;
  return (
    <div className={styles.box}>
      {eventItems ? (
        eventItems.map((e) => {
          if (!isMobileScreen)
            return (
              <div
                onClick={() => props.onClick(e)}
                className={
                  e != props.selectedJob
                    ? `${styles.jobTile}`
                    : `${styles.jobTile} ${styles.selected}`
                }
              >
                <img
                  src={cadet}
                  style={{
                    height: "10vh",
                    objectFit: "contain",
                    aspectRatio: "1/1",
                    marginRight: "20px",
                  }}
                />
                <div
                  style={{
                    flex: 3,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "space-evenly",
                      width: "50%",
                    }}
                  >
                    <p style={{ margin: "0px", color: "grey" }}>{e.name}</p>
                    <p style={{ margin: "0px", color: "rgb(34,71,82)" }}>
                      Date: {new Date(e.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <span>
                      <MdLocationPin color="grey" />
                      <span style={{ color: "grey" }}>Location</span>
                    </span>
                    <p style={{ margin: "0px" }}>{e.location}</p>
                  </div>
                </div>
              </div>
            );
          else
            return (
              <Accordion className={styles.accordion}>
                <AccordionSummary expandIcon={<ExpandMore fontSize="large" />}>
                  <div className={styles.jobTile}>
                    {/* <img src={e.iconUrl} style={{ height: "10vh", objectFit: "contain", aspectRatio: "1/1", marginRight: "20px" }} /> */}
                    <div
                      style={{
                        flex: 3,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                          justifyContent: "space-evenly",
                          width: "50%",
                        }}
                      >
                        <p style={{ margin: "0px", color: "grey" }}>
                          {e.eventName}
                        </p>
                        <p style={{ margin: "0px", color: "rgb(34,71,82)" }}>
                          {e.eventDate}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                          justifyContent: "space-evenly",
                        }}
                      >
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
            );
        })
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default EventList;
