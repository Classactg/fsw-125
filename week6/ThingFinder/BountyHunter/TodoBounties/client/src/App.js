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
          type = "text" 
          name = "title"
          value = {this.state.title}
          onChange = {this.handleChange}
          placeholder = "Title"/>
          
          <input
          type = "text" 
          name = "living"
          value = {this.state.living}
          onChange = {this.handleChange}
          placeholder = "Living"/>
          
          <input
          type = "text"
          name = "bountyAmount"
          value = {this.state.bountyAmount}
          onChange = {this.handleChange}
          placeholder = "Bounty amount"/>
          
          <input
          text = "text"
          name = "type"
          value = {this.state.type}
          onChange = {this.handleChange}
          placeholder = "Jedi/Sith"/>
          
          <button onClick = {this.handleSubmit}>Submit</button></div>
        {this.state.array.map((bounty, index) => {
          return(
            <div className="bounty"
                 key = {index}
                 id = {index}
            > 
              <h1>Title: { bounty.title }</h1>
              <h2>Living: { bounty.living }</h2>
              <h3>Bounty Amount: { bounty.bountyAmount }</h3>
              <h3>Type: { bounty.type }</h3>
            </div>
          )
        })}
        <p>
          <h1>
        We are here to take over the world!
          </h1>
        </p>
      </header>
    </div>
  )}
}

export default App;
