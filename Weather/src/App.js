import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Today from './Components/Today';
import ThreeDay from './Components/ThreeDay';

import SevenDay from './Components/SevenDay'
import {HashRouter, Route} from 'react-router-dom';





class App extends Component {


     render() {

          return (





<HashRouter>

                     <Route exact path="/" component={ Today } />
                     <Route path="/threeday" component={ ThreeDay } />
                     <Route path="/sevenday" component={ SevenDay } />


 </HashRouter>




          );

     }
}

export default App;
