import React from "react";
import { shallow, mount } from "enzyme";

import InputSearch from "../InputSearch";

const onSubmitSpy = jest.fn();

describe("InputSearch component", () => {
  beforeEach(() => {
    onSubmitSpy.mockClear();
  });

  it("renders placeholder value", () => {
    const testPlaceholder = "test placeholder";
    const wrapper = shallow(<InputSearch placeholder={testPlaceholder} />);

    expect(wrapper.find("input").props().placeholder).toEqual(testPlaceholder);
  });

  it("submits form", () => {
    const wrapper = mount(<InputSearch onSubmitHandler={onSubmitSpy} />);

    expect(onSubmitSpy).not.toHaveBeenCalled();
    wrapper.find("button[type='submit']").simulate("submit");
    expect(onSubmitSpy).toHaveBeenCalled();
  });

  it("submits form with searched text", () => {
    const wrapper = mount(<InputSearch onSubmitHandler={onSubmitSpy} />);
    const testSearchText = "test search";

    wrapper
      .find("input")
      .simulate("change", { target: { value: testSearchText } });

    expect(onSubmitSpy).not.toHaveBeenCalled();
    wrapper.find("button[type='submit']").simulate("submit");
    expect(onSubmitSpy).toHaveBeenCalledWith(testSearchText);
  });
});
