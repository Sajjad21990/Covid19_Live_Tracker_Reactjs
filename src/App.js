import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchCountriesData } from "./api";

import coronaImage from "./images/coronavirus.png";
import { Paper, Typography } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    countryDates: [],
    activeCase: [],
    deaths: [],
    recoveredCases: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
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
        {console.log(this.state.data)}
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
        />
        <Paper elevation={3}>
          <Typography className={styles.links}>
            Api Details:{" "}
            <a
              href="https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest"
              target="_blank"
            >
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

export default App;
