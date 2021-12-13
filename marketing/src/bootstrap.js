import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

// MOunt function to start the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);
};

//if in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot, {});
}

// We are running through container and should export mount()
export { mount };
