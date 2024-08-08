import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';

// import Header from './layouts/Header';
import Routing from './Routing';

const Main = () => {

  return (
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
  )
}


export default Main;