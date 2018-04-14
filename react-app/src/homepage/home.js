import React, { Component } from 'react';
import SubmissionForm from './submissionForm.js';


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

export default Home;