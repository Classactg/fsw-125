import axios from 'axios';
import React from 'react';



class App extends React.Component {
  constructor (){
    super()
    this.state={
      array:[], title:"", author:"", songdate:"", type:"" 
    }
  }
 handleChange=(event)=>{
   const {name, value} = event.target
   console.log(name, value)
   console.log({[name]:value})
   this.setState({[name]:value})
 }
  componentDidMount(){
    axios.get("/music")
    .then(response => {console.log(response.data)
        this.setState({array: response.data})
      })
    .catch(error => console.log(error))
  }
  handleSubmit=(event)=>{const newsong={title: this.state.title, author: this.state.author,songdate: this.state.songdate, type: this.state.type,}

console.log(newsong)
axios.post("/music", newsong)
.then(response => {console.log(response.data)
    this.setState({array: [...this.state.array, response.data]})
  })
.catch(error => console.log(error))
}
  render(){  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
        <div>
              <ul id="nav">
                <li><a href="#">Log In</a></li>
                <li><a href="#">Log Out</a></li>
              </ul>
            </div>

           </nav>
          <div><input
          type = "text" 
          name = "title"
          value = {this.state.title}
          onChange = {this.handleChange}
          placeholder = "title"/>
          
          <input
          type = "text" 
          name = "author"
          value = {this.state.author}
          onChange = {this.handleChange}
          placeholder = "artist"/>
          
          <input
          type = "text"
          name = "songdate"
          value = {this.state.songdate}
          onChange = {this.handleChange}
          placeholder = "song date"/>
          
          <input
          text = "text"
          name = "type"
          value = {this.state.type}
          onChange = {this.handleChange}
          placeholder = "rock/pop/classic/rap"/>
          
          <button onClick = {this.handleSubmit}>Submit</button></div>
          <h1 className="header">
         Instrumental App
          </h1>
        {this.state.array.map((song, index) => {
          return(
            <div className="song"
                 key = {index}
                 id = {index}
            > 
              <h1>Song Title: { song.title }</h1>
              <h2>Artist: { song.author }</h2>
              <h3>song date: { song.songdate }</h3>
              <h3>Type: { song.type }</h3>
            </div>
          )
        })}
        <p>
          <h1>
         Instrumental App
          </h1>
        </p>
      </header>
    </div>
  )}
}

export default App;
