import React from "react";
import CardConstant from "../../../constants/CardConstant";
import { Grid } from "@material-ui/core";

const IndiaTrackerCards = (props) => {
  return (
    <Grid container spacing={2} justify="center">
      <CardConstant
        categoryHeading="confirmedheading"
        categoryTitle="CONFIRMED"
        categoryTodaysCount="confirmedTodaysCount"
        todaysCount={123}
        categoryTotalCount="confirmedTotalCount"
        totalCount={12323}
      />

      <CardConstant
        categoryHeading="activeheading"
        categoryTitle="ACTIVE"
        categoryTodaysCount="activeTodaysCount"
        todaysCount={0}
        categoryTotalCount="activeTotalCount"
        totalCount={2131}
      />

      <CardConstant
        categoryHeading="recoveredheading"
        categoryTitle="RECOVERED"
        categoryTodaysCount="recoveredTodaysCount"
        todaysCount={0}
        categoryTotalCount="recoveredTotalCount"
        totalCount={21}
      />
      <CardConstant
        categoryHeading="testheading"
        categoryTitle="TESTS"
        categoryTodaysCount="testTodaysCount"
        todaysCount={0}
        categoryTotalCount="testTotalCount"
        totalCount={3112}
      />

      <CardConstant
        categoryHeading="deathsheading"
        categoryTitle="DECEASED"
        categoryTodaysCount="deathsTodaysCount"
        todaysCount={21}
        categoryTotalCount="deathsTotalCount"
        totalCount={12}
      />
    </Grid>
  );
};

export default IndiaTrackerCards;
