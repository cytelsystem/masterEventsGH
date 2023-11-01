import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {DataProvider} from '../DataContext';

function Layout (props) {
  return (
    <DataProvider>
      <React.Fragment>
        <Header />
        {props.children}
        <Footer/>
      </React.Fragment>
    </DataProvider>
  )
}

export default Layout;
