import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header'
import reportWebVitals from './reportWebVitals';


const elf_names = ["Jingo", "Jango", "Jumbo"]

ReactDOM.render(
  <div>
    <Header elves={elf_names}/>
  </div>,
  document.getElementById('root')
);

{/* <React.StrictMode>
    <App />
  </React.StrictMode>, */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
