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
            Attending: '',
            Food: '',
            Beer: false,
            Wine: false,
            Selzter: false,
            Soda: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("name:" + name);
        console.log("value:" + value);

    
        this.setState({
            [name]: value
        });
      }
    
      handleSubmit(event) {
        const data = new FormData(event.target);
        console.log("testing");
        console.log(data);
        fetch('https://script.google.com/macros/s/AKfycbwhiT80X_X1WtxbywuRhLWA_wEmdeRwz7relpq6VcxxlXoBgKE/exec', {
          method: "GET",
          dataType: "json",
          body: data
        });
        event.preventDefault();
      }
    
    

    render() {
        return (
            <div>
                <h1>Family Gathering Party</h1>
                <h2>We will be having a party, please fill out the form below to tell us if 
                    You'll be attending 
                </h2>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="Name" value={this.state.Name} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    <br/>
                    Will you be attending?
                    <br/>
                    <label htmlFor="Yes">Yes: </label>
                    <input type="radio" name="Attending" id="Yes" value="Yes" onChange={this.handleChange} checked={this.state.Attending === "Yes"} />
                    <label htmlFor="No">No: </label>
                    <input type="radio" name="Attending" id="No" value="No" onChange={this.handleChange} checked={this.state.Attending === "No"} />                        
                    <br/>
                    Vegetarian or meat?<br/>
                    <label htmlFor="Veg">Vegetarian: </label>
                    <input type="radio" name="Food" id="Veg" value="Veg" onChange={this.handleChange} checked={this.state.Food === "Veg"} />                        
                    <label htmlFor="Meat">Meat: </label>
                    <input type="radio" name="Food" id="Meat" value="Meat" onChange={this.handleChange} checked={this.state.Food === "Meat"} />                        
                    <br/>
                    What will you be drinking?<br/>
                    <label htmlFor="Beer">Beer </label>
                    <input type="checkbox" name="Beer" id="Beer" onChange={this.handleChange} checked={this.state.Beer === true} />
                    <br/>                    
                    <label htmlFor="Wine">Wine </label>
                    <input type="checkbox" name="Wine" id="Wine" onChange={this.handleChange} checked={this.state.Wine === true} />
                    <br/>                    
                    <label htmlFor="Selzter">Selzter </label>
                    <input type="checkbox" name="Selzter" id="Selzter" onChange={this.handleChange} checked={this.state.Selzter === true} />
                    <br/>                    
                    <label htmlFor="Soda">Soda </label>
                    <input type="checkbox" name="Soda" id="Soda" onChange={this.handleChange} checked={this.state.Soda === true} />
                    <br/>                    
                    <input type="submit" value="Submit" />
                    {/* <button>Submit</button> */}
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