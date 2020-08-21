import { useState } from "react";

function useAlert() {
  const initialAlertMessage = {
    message: "",
    type: "warn",
  };
  const [alertMessage, setAlertMessage] = useState(initialAlertMessage);

  const setMessage = (message, type) =>
    setAlertMessage({
      message,
      type,
    });
  const resetMessage = () => setAlertMessage(initialAlertMessage);

  return [alertMessage, setMessage, resetMessage];
}

export default useAlert;
