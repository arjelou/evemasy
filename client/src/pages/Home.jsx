import React from 'react';
import styles from '../style';
import { Navbar } from "../component"


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     productList: []
    // }
}

  render() {
  return (
    <div className={`${styles.paddingX} bg-primary`}>
      <Navbar />
    </div>
  )
}
}
