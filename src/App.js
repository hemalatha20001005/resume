import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        
      </div>
    );
  }
}
export default App;
