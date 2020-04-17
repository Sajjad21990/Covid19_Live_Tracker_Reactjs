import React from "react";
import styles from "./Cards.module.css";
import { Grid } from "@material-ui/core";

import CardConstant from "../../constants/CardConstant";

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

  let updatedDate = new Date(updated).toTimeString();
  updatedDate = updatedDate.slice(0, 8);

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
        <CardConstant
          categoryHeading="confirmedheading"
          categoryTitle="CONFIRMED"
          categoryTodaysCount="confirmedTodaysCount"
          todaysCount={todayCases}
          categoryTotalCount="confirmedTotalCount"
          totalCount={cases}
        />

        <CardConstant
          categoryHeading="activeheading"
          categoryTitle="ACTIVE"
          categoryTodaysCount="activeTodaysCount"
          todaysCount={0}
          categoryTotalCount="activeTotalCount"
          totalCount={active}
        />

        <CardConstant
          categoryHeading="recoveredheading"
          categoryTitle="RECOVERED"
          categoryTodaysCount="recoveredTodaysCount"
          todaysCount={0}
          categoryTotalCount="recoveredTotalCount"
          totalCount={recovered}
        />
        <CardConstant
          categoryHeading="testheading"
          categoryTitle="TESTS"
          categoryTodaysCount="testTodaysCount"
          todaysCount={0}
          categoryTotalCount="testTotalCount"
          totalCount={tests}
        />

        <CardConstant
          categoryHeading="deathsheading"
          categoryTitle="DECEASED"
          categoryTodaysCount="deathsTodaysCount"
          todaysCount={todayDeaths}
          categoryTotalCount="deathsTotalCount"
          totalCount={deaths}
        />
      </Grid>
    </div>
  );
};

export default Cards;
