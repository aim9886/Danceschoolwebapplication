// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App.jsx"
// import style from "./global.css"

createRoot(document.getElementById("root")).render(<App/>)
