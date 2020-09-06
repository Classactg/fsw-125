import axios from 'axios';
import React from 'react';



class App extends React.Component {
  constructor (){
    super()
    this.state={
      array:[], title:"", living:"", bountyAmount:"", type:"" 
    }
  }
 handleChange=(event)=>{
   const {name, value} = event.target
   console.log(name, value)
   console.log({[name]:value})
   this.setState({[name]:value})
 }
  componentDidMount(){
    axios.get("/bounties")
    .then(response => {console.log(response.data)
        this.setState({array: response.data})})
    .catch(error => console.log(error))
  }
  handleSubmit=(event)=>{const newBounty={title: this.state.title, living: this.state.living,bountyAmount: this.state.bountyAmount, type: this.state.type,}

console.log(newBounty)
axios.post("/bounties", newBounty)
.then(response => {console.log(response.data)
    this.setState({array: [...this.state.array,response.data]})})
.catch(error => console.log(error))}
  render(){  return (
    <div className="App">
      <header className="App-header">
   <div><input 
          name="title"
          onChange={this.handleChange}
          value = {this.state.title}/>
          <input 
          name="living"
          onChange={this.handleChange}
          value = {this.state.living}/><input 
          name="bountyAmount"
          onChange={this.handleChange}
          value = {this.state.bountyAmount}/><input 
          name="type"
          onChange={this.handleChange}
          value = {this.state.type}/>
          <button onClick={this.handleSubmit}>Submit</button></div>
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
      </header>
    </div>
  )}
}

export default App;
