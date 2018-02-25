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
        event.preventDefault();
        // const dataObj = new FormData(event.target);
        var url = 'https://script.google.com/macros/s/AKfycbwhiT80X_X1WtxbywuRhLWA_wEmdeRwz7relpq6VcxxlXoBgKE/exec';
        var object = "?";

        // Display the key/value pairs
        for(var key in this.state) {
            object += encodeURIComponent(key) + "=" +  encodeURIComponent(this.state[key]);
            object += "&";
        }
        console.log(object);
        // console.log(url+object);
        url += object.substr(0, object.length-1);

        fetch(url, {
          method: "GET",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then((res) => {
            if (!res.ok) {
                alert("Something went wrong, feel free to email josh: joshdecosta@gmail.com");
                throw Error(res.statusText);
            } else if (res.ok) {
                alert("thanks for responding!");
            }
            console.log(res.data);
        });
      }
    
    

    render() {
        return (
            <div>
                <h1>Family Gathering Party</h1>
                <h2>We will be having a party, please fill out the form below to tell us if 
                    You'll be attending 
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="Name" required pattern="[A-Za-z ]+" value={this.state.Name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="Email" required value={this.state.Email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <fieldset>
                            <legend>Will you be attending?</legend>
                            <label htmlFor="Yes">Yes:</label>
                            <input type="radio" name="Attending" id="Yes" value="Yes" onChange={this.handleChange} checked={this.state.Attending === "Yes"} />
                            <label htmlFor="No">No:</label>
                            <input type="radio" name="Attending" id="No" value="No" onChange={this.handleChange} checked={this.state.Attending === "No"} />                        
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Vegetarian or meat?</legend>
                            <label htmlFor="Veg">Vegetarian:</label>
                            <input type="radio" name="Food" id="Veg" value="Veg" onChange={this.handleChange} checked={this.state.Food === "Veg"} />                        
                            <label htmlFor="Meat">Meat:</label>
                            <input type="radio" name="Food" id="Meat" value="Meat" onChange={this.handleChange} checked={this.state.Food === "Meat"} />                        
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>What will you be drinking?</legend>
                            <label htmlFor="Beer">Beer</label>
                            <input type="checkbox" name="Beer" id="Beer" onChange={this.handleChange} checked={this.state.Beer === true} />
                            <label htmlFor="Wine">Wine</label>
                            <input type="checkbox" name="Wine" id="Wine" onChange={this.handleChange} checked={this.state.Wine === true} />
                            <label htmlFor="Selzter">Selzter</label>
                            <input type="checkbox" name="Selzter" id="Selzter" onChange={this.handleChange} checked={this.state.Selzter === true} />
                            <label htmlFor="Soda">Soda</label>
                            <input type="checkbox" name="Soda" id="Soda" onChange={this.handleChange} checked={this.state.Soda === true} />
                        </fieldset>                                                
                    </div>
                    <div className="button">
                        <button type="submit">Send it</button>
                        {/* <button>Submit</button> */}
                    </div>
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