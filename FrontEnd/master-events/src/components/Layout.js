import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import {DataProvider} from '../DataContext';

function Layout (props) {
  return (
    <DataProvider>
      <React.Fragment>
        <Header />
        <Main/>
        <Footer/>
        {props.children}
      </React.Fragment>
    </DataProvider>
  )
}

export default Layout;
