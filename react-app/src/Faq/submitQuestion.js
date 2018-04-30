import React, { Component } from 'react';
import './submitQuestion.css';
import env from '../homepage/env.json';

class SubmitQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name : "",
            Question : "",
            Response : ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var idUrl = env['faqUrl'];
        idUrl += "id?table=questionsTable";

        fetch(idUrl, {
            method: "GET",
            headers: {
                Accept : "application/json",
                'Content-Type': 'application/json'
            }
          }).then((res) => {
            var body = "";
            if (res.ok) {
                // console.log(res.json());
                body = res.json();
                return body;
            } else if (!res.ok) {
                throw Error(res.statusText);
            }
          }).then((data) => {

            console.log("id:" + data.id);
            var postUrl = env['faqUrl'];  
            console.log(postUrl);
            postUrl += 'questions';       
            console.log(postUrl);   
            fetch(postUrl, {
            method: "POST",
            headers: {
                Accept : "application/json",
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                questionId : data.id.toString(),
                question : this.state.Question,
                name : this.state.Name
            })
            }).then((res) => {
                if (!res.ok) {
                    alert("Something went wrong, feel free to email josh: joshdecosta@gmail.com");
                    console.log(res.json());
                    throw Error(res.statusText);
                } else if (res.ok) {
                    alert("thanks for responding! your question will be answered soon");
                    this.setState({
                        Response : "Success!"
                    });
                }
                console.log(res.data);
            });
        });

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
                <div>
                    <p className="">{this.state.Response}</p>
                </div>
            </form>

            </div>
        )
    }
}
export default SubmitQuestion;