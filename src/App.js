import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Headertopmenu from './Components/Header/Headertopmenu'
import Search from './Components/Header/Search'
import Mainmenu from './Components/Header/Mainmenu'
import Banner from './Components/Header/Banner'
import Brands from './Components/Middle/Brand'
import Footer from './Components/Footer/Footermenu'

class App extends Component {
  render() {
    return (
      <>
        <body id="index">
          <div class="wrapar">
            <div class="header">
              <Headertopmenu />
              <Search />
              <Mainmenu />
              <Banner />
              <Brands />
              <Footer />
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default App;