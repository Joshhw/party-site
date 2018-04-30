import React, { Component } from 'react';
import SubmitQuestion from './submitQuestion.js';
import { CSSTransitionGroup } from 'react-transition-group';
import './Faq.css';

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

        const questions = this.state.questions.map(question =>
            <div key={question.questionId}>
                <h3>{question.question}</h3>
                <p className="Answer"><i>{question.answer}</i></p>
                <hr/>
            </div>);


        return (
            <div>
                {questions}
                {this.state.questions.length ? 
                    <button className="question-link" onClick={this.showForm}>Submit a question</button> : null}
                {this.state.toggleForm ? 
                    // <CSSTransitionGroup
                    // transitionName="example"
                    // transitionEnterTimeout={500}
                    // transitionLeaveTimeout={300}> 
                        <SubmitQuestion/>  :
                    // </CSSTransitionGroup> : 
                    null}
            </div>

        );
    }
}

export default Faq;