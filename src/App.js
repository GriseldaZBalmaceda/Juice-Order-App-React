import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Juices from './components/Juices/Juices';
function App() {
  return (
    <Fragment>
      <Header />
      <main>
      <Juices />
      </main>
    </Fragment>
  );
}

export default App;
