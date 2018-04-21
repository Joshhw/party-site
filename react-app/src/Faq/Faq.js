import React, { Component } from 'react';

class Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
        // this.loadQuestions = this.loadQuestions.bind(this);
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
                <h3>Questions and potentially answers</h3>
                {this.state.questions.map(question =>
                <div key={question.questionId}>
                <p >Question: {question.question}</p>
                <p>Answer: {question.answer}</p>
                </div>)}
            </div>

        );
    }
}

export default Faq;