import React from "react";
import ReactDOM from "react-dom";
import "./globals.css"
import "./styleguide.css"
import App from "./App";
import {Provider} from "react-redux";
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("app"));