import React, { Component } from 'react';
import SubmitQuestion from './submitQuestion.js';

class Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            toggleForm: false
        };
        // this.loadQuestions = this.loadQuestions.bind(this);
        this.showForm = this.showForm.bind(this);
    }
    showForm() {
        this.setState(prevState => ({
            toggleForm : !prevState.toggleForm
        }))
    }
    componentDidMount() {
        fetch("https://b8wl2b2tpa.execute-api.us-east-1.amazonaws.com/latest/questions", {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
            }).then( (res) => {
                return res.json()})
              .then(data => {
                this.setState({
                    questions: data.Items
                });
              })
    }

    render() {
        return (
            <div>
                {this.state.questions.map(question =>
                <div key={question.questionId}>
                <h3>{question.question}</h3>
                <p><i>{question.answer}</i></p>
                <hr/>
                </div>)}
                {this.state.questions.length ? 
                    <button className="question-link" onClick={this.showForm}>Submit a question</button> : null}
                {this.state.toggleForm ? <SubmitQuestion/> : null}
            </div>

        );
    }
}

export default Faq;