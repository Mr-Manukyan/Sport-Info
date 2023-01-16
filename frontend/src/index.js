import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {withSuspense} from "./components/Common/Hooks/withSuspense";
import { LanguageProvider } from "./components/Common/LanguageProvider/LanguageProvider.tsx"

const App = withSuspense(React.lazy( () => import("./App.js")))

render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
