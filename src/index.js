import { StrictMode } from "react";
import ReactDOM from "react-dom";
import BasicTable from "./BasicTable";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BasicTable />
  </StrictMode>,
  rootElement
);
