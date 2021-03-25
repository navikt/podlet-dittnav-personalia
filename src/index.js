import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import { SWRConfig } from "swr";
import App from "./App";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  // Sentry.init({ dsn: "TODO: Legg inn din  egen sentry url" });
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ shouldRetryOnError: false }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("podlet-dittnav-personalia")
);
