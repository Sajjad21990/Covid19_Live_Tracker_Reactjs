import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import { ResponsiveLine } from "@nivo/line";
import { yellow } from "@material-ui/core/colors";

const Chart = (props) => {
  const { data1, countryName, dates, cases, deaths, recovered } = props;

  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApi();
  }, []);

  let globalLineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  let countryLineChart = cases ? (
    <Line
      data={{
        labels: dates,
        datasets: [
          {
            data: cases,
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(126, 188, 238,0.5)",
            fill: true,
          },
          {
            data: recovered,
            label: "Recovered",
            borderColor: "#3aff33",
            backgroundColor: "rgba(3, 252, 136, 0.5)",
            fill: true,
          },
          {
            data: deaths,
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,170,181, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  let barGraph = data1.cases ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(126, 188, 238,1)",
              "rgba(3, 252, 136, 1)",
              "rgba(255,170,181, 1)",
            ],
            data: [data1.cases, data1.recovered, data1.deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${countryName}` },
      }}
    />
  ) : null;

  let graph = globalLineChart;
  const bar = barGraph;

  if (countryName) {
    graph = countryLineChart;
  }
  return (
    <div className={styles.container}>
      <div className={styles.graph}>{graph}</div>

      <div className={styles.bar}>{bar}</div>
    </div>
  );
};

export default Chart;
