import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NameCard from './component/NameCard'
import LikesButton from './component/LikesButton'
import DigitalClock from './component/DigitalClock'
import reportWebVitals from './reportWebVitals';

const tags = ['聪明','可爱']
ReactDOM.render(
  <React.StrictMode>
    <NameCard name="rjj" number={1380288} isHuman tags={tags}/>
    <LikesButton />
    <DigitalClock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
