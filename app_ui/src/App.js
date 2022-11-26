import React from "react";
import { render } from "react-dom";
import HeaderAppBar from "./components/Header";
import AppRouter from "./routers/AppRouter";
import "./assets/css/App.css";

const App = () => (
    <AppRouter />
);

export default App;
