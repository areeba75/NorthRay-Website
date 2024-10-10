import React from 'react';
import  styles from "./page.module.scss";
import Header from './home/page'


const Home = () => {


  return (
    <>
    <div className={styles.main}>
    <Header/>
    </div>
    </>
  )
}

export default Home;