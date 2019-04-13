import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class Location extends React.Component {
  //The constructor function is called before anything else
  // constructor(props) {
  // 	super(props); //Overriding the constructor function in React.component. super helps to make sure the codes in React.component still gets called
  // 	/*
  //   -Super is a reference to a parent construction function */
  // 	//This is the only time we do direct assignment to our setState
  //   this.state = { lat: null, errorMessage: '' }; //Initialise state object
  // }
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //To update our state object we called setState
      position => this.setState({ lat: position.coords.latitude }),
      err =>
        this.setState({
          errorMessage: err.message
        })
    );
  }

  //Helper function to wrap the conditions
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      // return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      // <div>{this.state.lat}</div>;
    }

    return (
      <div>
        <Spinner message="Please accept location request" />
      </div>
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default Location;

/*
  Component Lifecycle
  - Constructor
  -render (content visible on screen)
  - ComponentDidMount - Good place to do your initial data loading. It is only invoked one time.
  -ComponentDidUpdate(sit and wait for updates) -used for multiple data loading.
  -componentWillUnmount(Sit and wait until this component is no longer shown)

  Benefits of class based components
  -Easier code organisation
  -Can use 'state' to easier handle input
  -Understands lifecycle events: easier to do things when the app first start.

  Rules of Class Components
  - Must be a Javascript Class
  - Must extend (subclass) React.Component
  - Must define a 'render'
 method that returns some amount of JSX 
 
 Rules of State

- Only usable with class components
- It is a JS object that contains data relevant to a component
- Updating 'state' on a component causes the  the component to (almost) instantly rerender
-State must be initialised when a component is created
- State can only be updated using the function setState
 */
