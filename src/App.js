import React from 'react'
import './App.css';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers/index_c_ters'
// import {Brand, Cta, Navbar } from './components';
// import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import Cta from './components/cta/Cta';
// import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      {/* <Feature /> */}
      <Blog />
      {/* <Article /> */}
      <Footer />
    </div>
  )
}

export default App;
