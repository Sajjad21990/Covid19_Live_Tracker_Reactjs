import axios from "axios";

const url_1 = "https://corona.lmao.ninja";
const url_2 = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url_1;
  if (country) {
    changeableUrl = `${url_1}/countries/${country}`;
  } else {
    changeableUrl = `${url_1}/all`;
  }

  try {
    const {
      data: { cases, todayCases, deaths, todayDeaths, recovered, updated },
    } = await axios.get(changeableUrl);
    return { cases, todayCases, deaths, todayDeaths, recovered, updated };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url_2}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url_2}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountriesData = async (country) => {
  let changeableUrl = url_1;

  if (country) {
    changeableUrl = `${url_1}/v2/historical/${country}`;
  } else {
    changeableUrl = `${url_1}/v2/historical/`;
  }

  try {
    const response = await axios.get(changeableUrl);

    const res = response.data.timeline;
    return res;
  } catch (error) {
    console.log(error);
  }
};
