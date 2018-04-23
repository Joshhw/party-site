import React, { Component } from 'react';
import './submitQuestion.css';

class SubmitQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name : "",
            Question : ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {

    }


    handleChange(event) {
        var value = event.target.value;
        var name = event.target.name;
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" autoFocus id="name" name="Name" required pattern="[A-Za-z ]+" value={this.state.Name} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="question">Question:</label>
                    <input type="text" id="question" name="Question" value={this.state.Question} onChange={this.handleChange} />
                </div>
                <div> 
                    <button type="submit">Send it!</button>
                </div>
            </form>

            </div>
        )
    }
}
export default SubmitQuestion;