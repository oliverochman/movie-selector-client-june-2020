import React, { Component } from 'react';
import Authentication from "./Components/Authentication";

class App extends Component {
  state = {
    authenticated: false
  }

  render() {
    let authentication
    this.state.authenticated ? (
      authentication = (
        <p id="message">You are currently logged in as {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
      )
    ) : (
      authentication = (
        <Authentication 
          setAuthenticated={() => this.setState({authenticated: true})}
        />
      )
    )

    return (
      <>
        {authentication}
        <h1>Movie selector</h1>
      </>
      );
  };
}
export default App;