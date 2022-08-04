import { getState, subscribe } from "./alertStore";

const currentState = getState(); // get the current state of the store

// get the button to update the store
const addAlertButton = document.getElementById("non-react-btn");

// add a click listener to the button
addAlertButton?.addEventListener("click", () => {
  currentState.addAlert({
    message: "This is a non-react alert",
    type: "success",
  });
});

subscribe((state) => {
  //whenever state changes, log the changes in the console
  console.log(state);
});
