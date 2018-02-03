import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import headerImage from './banner.jpg';
import './Main.css';


class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav>
                <ul className="nav-menu-list">
                    <li className="nav"><Link to='/'>About</Link></li>
                    <li className="nav"><Link to='/location'>Directions</Link></li>
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

class Home extends Component {
    render() {
        return (
            <div>
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdXp6DWNnStsPA-mO4IV0TI3EWpxras7J3d9U_qEd2nMW_7Eg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
            <text>testing one two</text>
            </div>
        );
    }
}

class Location extends Component {
    render() {
        return (
            <div/>
        );
    }
}

class Content extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/location' component={Location}/>
                </Switch>
        

        );
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}




export default Main;