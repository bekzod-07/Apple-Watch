import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {SiteHeader, Intro, Features, Frame, Group} from './components/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SiteHeader />
      <Intro/>
      <Features/>
      <Frame/>
      <Group/>
  </React.StrictMode>
);
