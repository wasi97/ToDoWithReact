import React, { Component} from "react";
import firebase from "./config/firebase.jsx"
import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [{title: "ghous", edit:false},{title:"ahmed", edit:false}],
      value: "",
     
    }
  }

  add_todo = ()=>{
    let obj = {title: this.state.value}
    this.setState({
      todos: {...this.state.todos, obj},
      value: ""
    })
    
  }

  deletetodo = (index)=>{
    this.state.todos.splice(index,1)
    this.setState({
      todos: this.state.todos
    })
  }

  edit_todo =(index)=>{
    this.state.todos[index].edit = true
    
    this.setState({
      todos: this.state.todos
    })
  }

  handleChange = (e,index)=>{
    this.state.todos[index].title = e.target.value
    this.setState({
      todos: this.state.todos
    })
    
  }

  update = (index)=>{
    this.state.todos[index].edit = false
    
    this.setState({
      todos: this.state.todos
    })
  }

  render(){
    let {todos, value} = this.state;
    return(
      <div>
        <input value={value}  onChange={(e)=> this.setState({value: e.target.value})} type="text" placeholder="Enter value"/>
        <button onClick={this.add_todo}>Add item</button>
        <ul>
          {todos.map((v,i)=>{
            return <li key={i}>
              {v.edit? <input value={v.title} type="text" onChange={(e)=>this.handleChange(e,i)}/> : v.title} 
            {v.edit?
            <button onClick={()=>this.update(i)}>update</button>:
            <button onClick={()=> this.edit_todo(i)}>edit</button>}
            <button onClick={()=>this.deletetodo(i)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}


export default App