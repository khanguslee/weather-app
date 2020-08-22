import React from "react";
import { shallow } from "enzyme";

import Alert from "../Alert";

describe("Alert component", () => {
  it("renders an alert message", () => {
    const testMessage = "test alert";
    const testType = "warning";
    const wrapper = shallow(<Alert message={testMessage} type={testType} />);

    expect(wrapper.text()).toEqual(testMessage);
  });
});
