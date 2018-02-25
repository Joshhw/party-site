import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import headerImage from './banner.jpg';
import './Main.css';
import env from './env.json';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav>
                    <ul>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/location'>Directions</Link></li>
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

class SubmissionForm extends Component {
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
            Soda: false,
            travelPool: ''
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
        var url = env['url'];
        var params = "?";

        // Display the key/value pairs
        for(var key in this.state) {
            params += encodeURIComponent(key) + "=" +  encodeURIComponent(this.state[key]);
            params += "&";
        }
        url += params.substr(0, params.length-1);

        fetch(url, {
          method: "GET",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then((res) => {
            if (!res.ok) {
                alert("Something went wrong, feel free to email josh: joshdecosta@gmail.com");
                throw Error(res.statusText);
            } else if (res.ok) {
                alert("thanks for responding! your form submission was successful");
            }
            console.log(res.data);
        });
      }
      render () {
          return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="Name" required pattern="[A-Za-z ]+" value={this.state.Name} onChange={this.handleChange}/>
            </div>
            {this.state.plusOne && <input type="checkbox" id="plusOne" name="plusOne"/>}
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="Email" required pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+" value={this.state.Email} onChange={this.handleChange} />
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
            <div>
                <fieldset>
                    <legend>Travel pool</legend>
                <label htmlFor="contribute">I can help</label>
                <input type="radio" name="travelPool" id="contribute" value="contribute" onChange={this.handleChange} checked={this.state.travelPool === "contribute"} />
                <label htmlFor="needsHelp">I need help</label>
                <input type="radio" name="travelPool" id="needsHelp" value="needsHelp" onChange={this.handleChange} checked={this.state.travelPool === "needsHelp"} /> 
                </fieldset>
            </div>
            <div className="button">
                <button type="submit">Send it</button>
            </div>
        </form>
        )
      }

    


}

class Home extends Component {

    render() {
        return (
            <div>
                <h1>We're having a party!</h1>
                <h3>When: Saturday, June 16th, 2018</h3>
                <h3>Time: 4pm to 9:30pm</h3>
                <h3>Where: Newton Community Farm, 303 Nahanton Street, Newton, MA 02459</h3>
                <p> 
                    So you've probably been wondering when this event would occur and we've finally
                    gotten all the details together for you. This is an event to bring family and friends
                    together under the same roof and celebrate our lives. We appreciate all that you've 
                    brought to ours over the years and thought everyone should meet, and now seems like
                    as good a time as ever. 
                </p>
                <p>
                    Below is a form to let us know if you're coming or not.
                We wanted to host this event for a simple reason: bring together people we love most. 
                We know from our own lives that traveling can be a big financial burden — 
                but we want to find a way to remove that barrier for everyone we invited through a travel pool. 
                Please consider <a href="https://paypal.me/pools/c/82cskaxLW6">contributing a gift</a> to help others travel, or reach out if financial assistance 
                would mean the difference for you attending. Any money that isn’t used from the pool will be 
                donated to The Haley House. Thank for you helping to make this party everything we ever dreamed of. 
                If you submit the form below and a pop up doesn't appear, please try again, or shut off your ad-blocker plugins. 
                Those can cause issues with the form submission. If it still doesn't work then email <a href="mailto:joshdecosta@gmail.com">Josh</a> and 
                he can sort it out.
                </p>
                <SubmissionForm/>
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
            <div className="Main">
                <Header />
                <Content />
            </div>
        );
    }
}




export default Main;