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
                        <li><Link to='/'>Home</Link></li>
                        {/* <li><Link to='/location'>Directions</Link></li> */}
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

class TravelContribution extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.props.change(e);
    }

        render () {
            return (
                <div>
                    <label htmlFor="amount">{this.props.labelText}</label>
                    <input type="text" id="amount" name="Amount" value={this.props.test} onChange={this.handleChange} />
                </div>
            )
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
            Seltzer: false,
            Soda: false,
            travelPool: 'neither',
            Amount: '0',
            Other: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
      }

      resetForm() {
          this.setState({
            Name: '',
            Email: '',
            Attending: '',
            Food: '',
            Beer: false,
            Wine: false,
            Seltzer: false,
            Soda: false,
            travelPool: 'neither',
            Amount: '0',
            Other: ''              
          })
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
                this.resetForm();
            }
            console.log(res.data);
        });
      }
      render () {
          const travelPool = this.state.travelPool;
          var travelElement = null;
          if (travelPool === "contribute") {
              travelElement = <TravelContribution labelText="How much?" test={this.state.amount} change={this.handleChange} />
          } else if (travelPool === 'needsHelp') {
            travelElement = <TravelContribution labelText="How much?" test={this.state.amount} change={this.handleChange} />           
          }

          return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="Name" required pattern="[A-Za-z ]+" value={this.state.Name} onChange={this.handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="Email" required pattern="[a-zA-Z0-9.+]+@[a-zA-Z0-9]+.[a-zA-Z]+" value={this.state.Email} onChange={this.handleChange} />
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
                    <legend>Dinner choice</legend>
                    <label htmlFor="Veg">Vegetarian:</label>
                    <input type="radio" name="Food" id="Veg" value="Veg" onChange={this.handleChange} checked={this.state.Food === "Veg"} />                        
                    <label htmlFor="Vegan">Vegan:</label>
                    <input type="radio" name="Food" id="Vegan" value="Vegan" onChange={this.handleChange} checked={this.state.Food === "Vegan"} />                        
                    <label htmlFor="Meat">Meat:</label>
                    <input type="radio" name="Food" id="Meat" value="Meat" onChange={this.handleChange} checked={this.state.Food === "Meat"} />                        
                    <div>
                        <label htmlFor="other">Food allergies?</label>
                        <input type="text" name="Other" id="other" value={this.state.Other} onChange={this.handleChange} />
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <legend>Drink selection(s)</legend>
                    <label htmlFor="Beer">Beer</label>
                    <input type="checkbox" name="Beer" id="Beer" onChange={this.handleChange} checked={this.state.Beer === true} />
                    <label htmlFor="Wine">Wine</label>
                    <input type="checkbox" name="Wine" id="Wine" onChange={this.handleChange} checked={this.state.Wine === true} />
                    <label htmlFor="Seltzer">Seltzer</label>
                    <input type="checkbox" name="Seltzer" id="Seltzer" onChange={this.handleChange} checked={this.state.Seltzer === true} />
                    <label htmlFor="Soda">Soda</label>
                    <input type="checkbox" name="Soda" id="Soda" onChange={this.handleChange} checked={this.state.Soda === true} />
                </fieldset>                                                
            </div>
            <div>
                <fieldset>
                    <legend>Travel fund</legend>
                <label htmlFor="contribute">I can help</label>
                <input type="radio" name="travelPool" id="contribute" value="contribute" onChange={this.handleChange} checked={this.state.travelPool === "contribute"} />
                <label htmlFor="needsHelp">I could use help</label>
                <input type="radio" name="travelPool" id="needsHelp" value="needsHelp" onChange={this.handleChange} checked={this.state.travelPool === "needsHelp"} /> 
                <label htmlFor="neither">Neither</label>
                <input type="radio" name="travelPool" id="neither" value="neither" onChange={this.handleChange} checked={this.state.travelPool === "neither"} />
                <div>
                {travelElement}
                </div>
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
                <h1>We're having a party to celebrate our marriage!</h1>
                <h3>When: Saturday, June 16th, 2018</h3>
                <h3>Time: 4:30pm to 9:30pm</h3>
                <h3>Where: Newton Community Farm, 303 Nahanton Street, Newton, MA 02459</h3>
                <p> 
                    As you know, we recently got married! And as we hope you know, we're so thankful for all that you
                     -- our friends and family -- have brought to our lives over the years.
                     So, we're bringing you all together under one roof to celebrate! 

                </p>
                <p>
                    <b>Travel fund (optional):</b> We know that traveling can be a big financial burden — but we want to try 
                    our best to bring our community together for this event. Please let us know
                     if extra cash would make it possible for you to attend, or if you are able to help someone else make it. 
                     Either way, we'll reach out once we have a 
                     better estimate of how much is needed and how much we can help.

                </p>
                <p>
                Thank you for helping to make this party everything we ever dreamed of!
                </p> 
                <SubmissionForm/>
                <p>
                    A pop up should appear when you submit the form. If it doesn't, 
                    please shut off your ad-blocker if you have one, and try again. 
                    If it still doesn't work, email <a href="mailto:joshdecosta@gmail.com">Josh</a> and 
                    he will help you.
                </p>
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