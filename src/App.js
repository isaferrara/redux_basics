import React, { useState } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import  WidthRemove from "./WidthRemove";

import {store} from './store'
import './index.css';

const App = () => {
  return <div>
  <HelloWorld key={1}  money={store.getState().money} />
  <ButtonGroup key={2} amount={[200, 100]}/>
  <WidthRemove key={3} actions={['widthraw', 'invest']}/>
  </div>

};

export default App;
