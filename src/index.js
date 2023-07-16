import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Hero from './Hero';
import Cards from './Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

function Application(){
  return application
}

const application = (
  <div className='app-wraper'> 
    <Navbar />
    <Hero />
    <Cards />
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
