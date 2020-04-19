import React from "react";

import { Cards, Chart, CountryPicker } from "../components";
import styles from "../App.module.css";
import { fetchData, fetchCountriesData, fetchDailyRecoveredData } from "../api";

import coronaImage from "../images/coronavirus.png";
import { Paper, Typography } from "@material-ui/core";

class Layout extends React.Component {
  state = {
    data: {},
    country: "",
    countryDates: [],
    activeCase: [],
    deaths: [],
    recoveredCases: [],
    recoveredData: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    const recoveredData = await fetchDailyRecoveredData();
    this.setState({ recoveredData: recoveredData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    await this.setState({ data: fetchedData, country: country });

    const countryData = await fetchCountriesData(country);

    const dates = Object.keys(countryData.cases);
    const cases = Object.values(countryData.cases);
    const deaths = Object.values(countryData.deaths);
    const recovered = Object.values(countryData.recovered);

    this.setState({
      activeCase: cases,
      deaths: deaths,
      recoveredCases: recovered,
      countryDates: dates,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="COVID-19" />

        <Cards data={this.state.data} />
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
          data={this.state.data}
          country={this.state.country}
        />
        <Chart
          data1={this.state.data}
          countryName={this.state.country}
          dates={this.state.countryDates}
          cases={this.state.activeCase}
          deaths={this.state.deaths}
          recovered={this.state.recoveredCases}
          recoveredData={this.state.recoveredData}
        />

        <Paper elevation={3}>
          <Typography className={styles.links}>
            Source Details:{" "}
            <a href="https://corona.lmao.ninja/docs/" target="_blank">
              Api 1,
            </a>
            <a href=" https://covid19.mathdro.id/api" target="_blank">
              Api 2
            </a>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Layout;
