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
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Attending: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("name:" + name);
        console.log("value:" + value);

    
        this.setState({
            [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }
    
    

    render() {
        return (
            <div>
                <h1>Family Gathering Party</h1>
                <h2>We will be having a party, please fill out the form below to tell us if 
                    You'll be attending 
                </h2>
                <form onSubmit="">
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="Name" value={this.state.Name} onChange={this.handleChange}/>
                    <br/>
                    <label for="email">Email: </label>
                    <input type="email" id="email" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    <br/>
                    <text>Will you be attending? </text>
                    <label for="Yes">Yes: </label>
                    <input type="radio" name="Attending" id="Yes" value="Yes" onChange={this.handleChange} checked={this.state.Attending === "Yes"} />
                    <label for="No">No: </label>
                    <input type="radio" name="Attending" id="No" value="No" onChange={this.handleChange} checked={this.state.Attending === "No"} />                        
                    <input type="submit" value="Submit" />
                </form>
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
            <div className="Content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/location' component={Location}/>
                </Switch>
            </div>
        

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