import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = (props) => {
  const {
    data: {
      cases,
      deaths,
      recovered,
      updated,
      todayCases,
      todayDeaths,
      tests,
      active,
    },
  } = props;
  console.log(tests);
  let updatedDate = new Date(updated).toTimeString();
  updatedDate = updatedDate.slice(0, 8);
  // const updatedDate = (timestamp) => {
  //   var date = new Date(timestamp * 1000);

  //   var year = date.getUTCFullYear();
  //   var month = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
  //   var day = date.getUTCDate();
  //   var hours = date.getUTCHours();
  //   var minutes = date.getUTCMinutes();
  //   var seconds = date.getUTCSeconds();

  //   month = month < 10 ? "0" + month : month;
  //   day = day < 10 ? "0" + day : day;
  //   hours = hours < 10 ? "0" + hours : hours;
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;

  //   return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
  // };

  // const lastUpdate = updatedDate(updated);
  console.log(updatedDate);
  if (!cases) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <div className={styles.updateHeading}>
        <p className={styles.heading1}>LAST UPDATED</p>
        <p className={styles.heading2}>{updatedDate} IST</p>
      </div>
      <Grid container spacing={2} justify="center">
        {/* <Grid
          item
          component={Card}
          xs={4}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              INFECTED
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cases} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{updatedDate}</Typography>
            <Typography variant="body2">
              NUMBER OF CONFIRMED CASES FROM COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={4}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{updatedDate}</Typography>
            <Typography variant="body2">
              NUMBER OF RECOVERIES FROM COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={4}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              DEATH
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{updatedDate}</Typography>
            <Typography variant="body2">
              NUMBER OF DEATHS CAUSED BY COVID-19
            </Typography>
          </CardContent>
        </Grid> */}
        {/* <Grid
          item
          component={Card}
          xs={4}
          md={3}
          className={cx(styles.NewCard)}
        >
          <CardContent>
            <Typography>DECEASED</Typography>
            <Typography>[+13]</Typography>
            <Typography>544</Typography>
          </CardContent>
        </Grid> */}
        <Grid item className={styles.gridItem} xs={4} md={3}>
          <Typography
            className={cx(styles.heading, styles.confirmedheading)}
            component={"span"}
          >
            CONFIRMED
          </Typography>
          <Typography
            className={cx(styles.todaysCount, styles.confirmedTodaysCount)}
          >
            [+
            <CountUp start={0} end={todayCases} duration={2} separator="," />]
          </Typography>
          <Typography
            className={cx(styles.totalCount, styles.confirmedTotalCount)}
          >
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              <CountUp start={0} end={cases} duration={2} separator="," />
            </span>
          </Typography>
        </Grid>
        <Grid item className={styles.gridItem} xs={4} md={3}>
          <Typography className={cx(styles.heading, styles.activeheading)}>
            ACTIVE
          </Typography>
          <Typography
            className={cx(styles.todaysCount, styles.activeTodaysCount)}
          ></Typography>
          <Typography
            className={cx(styles.totalCount, styles.activeTotalCount)}
          >
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              <CountUp start={0} end={active} duration={2} separator="," />
            </span>
          </Typography>
        </Grid>
        <Grid item className={styles.gridItem} xs={4} md={3}>
          <Typography className={cx(styles.heading, styles.recoveredheading)}>
            RECOVERED
          </Typography>
          <Typography
            className={cx(styles.todaysCount, styles.recoveredTodaysCount)}
          >
            [+13]
          </Typography>
          <Typography
            className={cx(styles.totalCount, styles.recoveredTotalCount)}
          >
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              <CountUp start={0} end={recovered} duration={2} separator="," />
            </span>
          </Typography>
        </Grid>
        <Grid item className={styles.gridItem} xs={4} md={3}>
          <Typography className={cx(styles.heading, styles.testheading)}>
            TEST
          </Typography>
          <Typography
            className={cx(styles.todaysCount, styles.testTodaysCount)}
          >
            [+13]
          </Typography>
          <Typography className={cx(styles.totalCount, styles.testTotalCount)}>
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              <CountUp start={0} end={tests} duration={2} separator="," />
            </span>
          </Typography>
        </Grid>
        <Grid item className={styles.gridItem} xs={4} md={3}>
          <Typography className={cx(styles.heading, styles.deathsheading)}>
            DECEASED
          </Typography>
          <Typography
            className={cx(styles.todaysCount, styles.deathsTodaysCount)}
          >
            [+
            <CountUp start={0} end={todayDeaths} duration={2} separator="," />]
          </Typography>
          <Typography
            className={cx(styles.totalCount, styles.deathsTotalCount)}
          >
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              <CountUp start={0} end={deaths} duration={2} separator="," />
            </span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
