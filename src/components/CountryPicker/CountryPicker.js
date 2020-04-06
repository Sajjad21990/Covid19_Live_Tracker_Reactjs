import React, { useState, useEffect } from "react";
import {
  NativeSelect,
  FormControl,
  Paper,
  InputLabel,
  Typography,
} from "@material-ui/core";
import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCounries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetch();
  }, [setFetchedCountries]);

  return (
    <div className={styles.container}>
      <Paper elevation={3}>
        <FormControl>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
            autoFocus
            id="native-select"
            styles={styles.option}
          >
            <option value="">Global</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            {fetchedCounries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Paper>
    </div>
  );
};

export default CountryPicker;
