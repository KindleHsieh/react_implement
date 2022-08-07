import "./index.css";
import React from "react";
import { render } from "react-dom";
import App from './components/APP';

const name1: string = 'Hello Cisco!';
console.log(name1);

// get the realy tag in html.
const root = document.getElementById('root');

// 根組件。
render(<App />, root)