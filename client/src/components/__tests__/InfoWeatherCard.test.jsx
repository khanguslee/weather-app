import React from "react";
import { shallow } from "enzyme";

import InfoWeatherCard from "../InfoWeatherCard";

describe("InfoWeatherCard component", () => {
  it("renders all weather information", () => {
    const testWeatherData = {
      humidity: 100,
      pressure: 999,
      rain: 2,
      wind: {
        speed: 5,
      },
    };
    const wrapper = shallow(
      <InfoWeatherCard
        humidity={testWeatherData.humidity}
        pressure={testWeatherData.pressure}
        rain={testWeatherData.rain}
        wind={testWeatherData.wind}
      />
    );

    const expectedHumidityString = "Humidity: 100%";
    const expectedPressureString = "Pressure: 999 Pa";
    const expectedWindSpeedString = "Wind Speed: 5 m/s";
    const expectedRainString = "Rain: 2 mm";

    expect(wrapper.find("p").length).toEqual(4);

    // Check if all text is correct
    expect(wrapper.find("[data-testid='humidity-text']").text()).toEqual(
      expectedHumidityString
    );
    expect(wrapper.find("[data-testid='pressure-text']").text()).toEqual(
      expectedPressureString
    );
    expect(wrapper.find("[data-testid='wind-speed-text']").text()).toEqual(
      expectedWindSpeedString
    );
    expect(wrapper.find("[data-testid='rain-text']").text()).toEqual(
      expectedRainString
    );
  });

  it("does not render rain information if data is not provided", () => {
    const testWeatherData = {
      humidity: 100,
      pressure: 999,
      wind: {
        speed: 5,
      },
    };
    const wrapper = shallow(
      <InfoWeatherCard
        humidity={testWeatherData.humidity}
        pressure={testWeatherData.pressure}
        wind={testWeatherData.wind}
      />
    );

    const expectedHumidityString = "Humidity: 100%";
    const expectedPressureString = "Pressure: 999 Pa";
    const expectedWindSpeedString = "Wind Speed: 5 m/s";

    expect(wrapper.find("p").length).toEqual(3);

    // Check if all text is correct
    expect(wrapper.find("[data-testid='humidity-text']").text()).toEqual(
      expectedHumidityString
    );
    expect(wrapper.find("[data-testid='pressure-text']").text()).toEqual(
      expectedPressureString
    );
    expect(wrapper.find("[data-testid='wind-speed-text']").text()).toEqual(
      expectedWindSpeedString
    );
  });
});
