import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

// components!
/*import Today from './Today';
import ThreeDay from './ThreeDay';
import TenDay from './TenDay';*/


class Nav extends Component {


     render () {
          return (

                    <div className="nav">
                         <Link to="/" id="first-link" class="link">Today</Link>
                         <Link to="/threeday" class="link">3Day</Link>
                         <Link to="/sevenday" id="last-link" class="link">7Day</Link>
                    </div>

          );
     }




}


export default Nav;
