
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'typeface-roboto';

//import Home from './components/Home';
import FormContainer from "./components/container/FormContainer.jsx";
import Sample from './components/Sample.jsx';
//import Contact from './components/Contact';
import Error from './components/Error.jsx';
import Navigation from './components/Navigation.jsx';
import './styles.scss';

class App extends Component {
  render() {
    return (
       <BrowserRouter id="experience-form">
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={FormContainer} exact/>
             <Route path="/sample" component={Sample} />
             <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


const wrapper = document.getElementById("experience-form");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
