import React from 'react';
// import { useMediaQuery } from 'react-responsive'
import styles from './index.module.scss';
import SvgLogo from '../icons/Logo';

const Menudata = [
  {
    name:"Home",
  },
  {
    name:"About",
  }
]

function Menulist(props) {
  const list = props.items.map((item) => 
    <li>{item.name}</li>
  );
  return (
    <ul className={styles.app_menulist}>
      {list}
    </ul>
  );
}


function AppHeader(props) {
  return (
    <div className={styles.app_header}>
      <h1>{props.siteName}</h1>
      <div>header</div>
    </div>
  );
}


function Sidebar(props) {
  return (
    <div className={styles.app_sidebar}>
      <a className={styles.app_logo} href="/">
        <SvgLogo className={styles.app_logo_pattern}/>
      </a>
      <Menulist items={Menudata}/>
      <div>english</div>
    </div>
  );
}

export {AppHeader, Sidebar};