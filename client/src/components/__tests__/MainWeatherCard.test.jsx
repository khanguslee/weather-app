import React from "react";
import { shallow, mount } from "enzyme";

import MainWeatherCard from "../MainWeatherCard";

describe("MainWeatherCard component", () => {
  it("renders all main weather information", () => {
    const testWeatherData = {
      city: "test city",
      country: "test country",
      temperature: 21,
      weather: {
        main: "test weather description",
        icon: "test icon",
      },
    };

    const wrapper = shallow(
      <MainWeatherCard
        city={testWeatherData.city}
        country={testWeatherData.country}
        temperature={testWeatherData.temperature}
        weather={testWeatherData.weather}
      />
    );

    const expectedHeaderString = "test city, test country";
    const expectedTemperatureString = "21°C";
    const expectedWeatherDescription = "test weather description";

    // Check if text is correct
    expect(wrapper.find("[data-testid='city-country-text']").text()).toEqual(
      expectedHeaderString
    );
    expect(wrapper.find("[data-testid='temperature-text']").text()).toEqual(
      expectedTemperatureString
    );
    expect(
      wrapper.find("[data-testid='weather-description-text']").text()
    ).toEqual(expectedWeatherDescription);

    // Check if an image exists
    expect(
      wrapper.find("img[data-testid='weather-icon']").exists()
    ).toBeTruthy();
  });
});
