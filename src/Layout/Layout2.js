import React from "react";
import IndiaTracker from "../components/IndiaTracker/IndiaTracker";
// import TableComponent from "../components/IndiaTracker/IndiaTrackerTable/TableComponent";
import styles from "../App.module.css";
// import { fetchIndianData } from "../api";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from "victory";

export default class Layout2 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <IndiaTracker />
        </div>
        <div>
          <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
            <VictoryBar
              style={{ data: { fill: "#c43a31" } }}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
            />
          </VictoryChart>
          <VictoryChart>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" },
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
              ]}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}
