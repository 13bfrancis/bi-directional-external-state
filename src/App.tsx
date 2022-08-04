import { useEffect, useState } from "react";
import create from "zustand";
import { Alert, getState, subscribe } from "./alertStore";

// this will be a custom react hook
// which subscribes to the state that is being controlled
// by vanialla javascript
const useAlertStore = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]); // the initial state is an empty array of alerts

  // this effect will run when the component is mounted (aka when the page is loaded)
  // it will subscribe to the state that is being controlled by vanialla javascript
  useEffect(() => {
    const subscription = subscribe((state) => {
      setAlerts(state.alerts);
    });
  }, []);

  // we will return the state which is updated whenever the external store we are subscribing to changes
  return { alerts };
};

const App = () => {
  const { alerts } = useAlertStore();

  const listOfAlerts = alerts.map((alert, index) => (
    <div key={index}>
      {alert.message} | {alert.type}
    </div>
  ));

  return (
    <>
      <p>Below is a list of alerts</p>
      {listOfAlerts}
    </>
  );
};

export default App;
