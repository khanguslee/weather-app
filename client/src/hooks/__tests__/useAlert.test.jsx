import { renderHook, act } from "@testing-library/react-hooks";
import useAlert from "../useAlert";

describe("useAlert", () => {
  it("should have an empty initial message", () => {
    const { result } = renderHook(() => useAlert());
    expect(result.current.alertMessage.message).toBe("");
  });

  it("should set an alert message correctly", () => {
    const { result } = renderHook(() => useAlert());
    const testAlertMessage = "test alert message";
    const testAlertType = "warn";
    act(() => {
      result.current.setMessage(testAlertMessage, testAlertType);
    });
    expect(result.current.alertMessage.message).toBe(testAlertMessage);
    expect(result.current.alertMessage.type).toBe(testAlertType);
  });

  it("should reset an alert message", () => {
    const { result } = renderHook(() => useAlert());
    act(() => {
      result.current.setMessage("hello", "world");
      result.current.resetMessage();
    });

    expect(result.current.alertMessage.message).toBe("");
    expect(result.current.alertMessage.type).toBe("");
  });
});
