import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  //startState
  state = { lat: null, errorMessage: '' }  
  
  componentDidMount(){
    //GETTING USER LOCATION
    window.navigator.geolocation.getCurrentPosition(
      //Arrowfunctions
      position => this.setState( {lat: position} ),
      err => this.setState( {errorMessage: err.message} )
    )
  }


  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Err: {this.errorMessage} </div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay latitude={this.state.lat} />
    }
    return <Loader />
  }
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)