import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import Accordion from '../presentational/Accordion.jsx';
import Button from '@material-ui/core/Button';
import data from '../data/experience';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    console.log(data);
    return (
      <form id="experience-form">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
        <h3>Experience</h3>
        <Accordion>
          <div label='Spark Digital'>
            <p>
              <strong>Position:</strong> FRONT END DEVELOPER
            </p>
            <p>
              <strong>Duration:</strong> 05/01/2017 - current
            </p>
            <p>
              <strong>Description:</strong> Starting in Spark Digital it was a new challenge that it was interesting to face,
              getting used to a different team, and a different working environment, to
              deliver a solution that may differ or not to other companies, to the Kaplan
              Universitiy, using a cms for the very first time, improving the soft skills also.
              So far I&#39;ve been working in four projects, three were for Macmillan, and
              currently I&#39;m working with react from an year ago. Constantly learning and
              adapting ares kills that I like to constantly improve.
            </p>
          </div>
          <div label='Globant'>
            <p>
              <strong>Position:</strong> FRONT END DEVELOPER
            </p>
            <p>
              <strong>Duration:</strong> 08/06/2016 - 04/01/2017
            </p>
            <p>
              <strong>Description:</strong>
              In this opportunity I was searching for new challenges, and I though it was a great idea to come to Globant,
              and it was, I worked in the CNN project, and as a first approachment I meet the client and interact with them,
              so it was really a good experienced to know a project from scratch, on the technology side,
              I&#39;ve learned how to work with lodash, less, nodejs, grunt  in unit testing with mocha and karma (ugh),
              and also made a month introduction to aws (amazon web service).
            </p>
          </div>
          <div label='MSTechnology'>
            <p>
              <strong>Position:</strong> FRONT END DEVELOPER
            </p>
            <p>
              <strong>Duration:</strong> 15/09/2015 - 30/05/2015
            </p>
            <p>
              <strong>Description:</strong> t was a grateful experience starting myself into the front-end development,
              and having it as a first job,  in this case I developed an insurance web app, with backbone, jquery, jasmine
              (not so much about this for me :P), express, require, underscore, bootstrap. The version control was github,
              a whole new experience to me considering that the only version control manager known to me before this it was cvs version control.
            </p>
          </div>
        </Accordion>
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("experience-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
