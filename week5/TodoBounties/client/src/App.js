import axios from 'axios';
import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (){
    super()
    this.state={
      array:[], 
    }
  }
  componentDidMount(){
    axios.get("/bounties")
    .then(response => {console.log(response.data)
        this.setState({array: response.data})})
    .catch(error => console.log(error))
  }
  render(){  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.array.map((bounty, index)=>{
          return(
            <div className="bounty"
                 key={index}
                 id={index}
            >
              {bounty.title}
            </div>
          )
        })}
        <p>
        We are here to take over the world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )}
}

export default App;
