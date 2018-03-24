import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import headerImage from './banner.jpg';
import './Main.css';
import Home from '../homepage/home.js';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </nav>
            </div>
        );
        
    }
}

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="imageClass" src={headerImage}  alt="banner" />
                <Menu/>
            </header>

        );
    }
}

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </div>
        );
    }
}




export default Main;