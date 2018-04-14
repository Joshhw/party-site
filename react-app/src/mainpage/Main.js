import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import headerImage from './banner.jpg';
import './Main.css';
import Home from '../homepage/home.js';
import Faq from '../Faq/Faq.js';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        
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
                    <Route exact path='/faq' component={Faq}/>
                </Switch>
            </div>
        );
    }
}




export default Main;