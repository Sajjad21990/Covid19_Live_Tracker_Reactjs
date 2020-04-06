import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = (props) => {
  const {
    data: { cases, deaths, recovered, updated },
  } = props;

  const updatedDate = new Date(updated).toDateString();

  if (!cases) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
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
          xs={12}
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
          xs={12}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
