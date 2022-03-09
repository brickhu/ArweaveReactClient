import React from 'react';
// import { useMediaQuery } from 'react-responsive'
import './index.less';


function AppHeader(props) {
  return (
    <div className='app-header'>
      <h1>{props.siteName}</h1>
      <div>header</div>
    </div>
  );
}


function Sidebar(props) {
  return (
    <div className='app-sidebar'>
      <h1>{props.siteName}</h1>
      <div>sidebar</div>
    </div>
  );
}

export {AppHeader, Sidebar};