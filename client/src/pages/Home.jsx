import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../style';
import { Navbar } from "../component";
// import CreateEvents from './createEvents';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     productList: []
    // }
}

  render() {
  return (
    <>
      <div className={`${styles.paddingX} bg-primary`}>
        <Navbar />
      </div>
      <div>
         <Outlet />
      </div>
    </>  
  )
}
}
