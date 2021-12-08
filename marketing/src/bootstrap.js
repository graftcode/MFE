import React from "react";
import ReactDOM from "react-dom";

// MOunt function to start the app
const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
};

//if in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// We are running through container and should export mount()
export { mount };
