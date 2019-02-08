import React, { Component } from 'react'
import axios from 'axios';
import './signup.css'

 
class Signup extends Component {
  constructor(){
    super();
    this.state = {
      username : '',
      password:'',
      blance:''
    }
  }
  onFormChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
  }

  onFormSubmit = (e) =>{
    e.preventDefault();
    axios.post('/user', {
      username:this.state.username,
      password:this.state.password,
      blance:this.state.blance
    }).then((res) => console.log(res))
    
  }
  render() {
   
    return (
      <div className = 'row'>
      <div class="col  m4"></div>
     <div  class="col  m4">
        <div  className = 'login'   >
     <div>
       <div style={{paddingTop:'6%'}} className ="loginElements">
           <form onSubmit = {this.onFormSubmit} >
       <div  >
          <div class="row">
       <div className ='profilePic'></div>
       <h4>SIGNUP</h4>               
     <div class="input-field col s12">
       <input id="email" type="text" class="validate"  name = 'username' onChange = {this.onFormChange} value={this.state.username} />
       <label for="email" style = {{color:'black',opacity:'0.5'}}>Email</label>
     </div>
 
     <div class="input-field col s12">
       <input id="password" type="password" class="validate" color = 'black'  name = 'password' onChange = {this.onFormChange}  value={this.state.password} /> 
       <label for="password" style = {{color:'black',opacity:'0.5'}}>Password</label>
     </div>
     <div class="input-field col s12">
       <input id="password" type="text" class="validate" color = 'black'  name = 'blance' onChange = {this.onFormChange}  value={this.state.blance} /> 
       <label for="password" style = {{color:'black',opacity:'0.5'}}>Blance</label>
     </div>
     
          <button class="btn red lighten-1 waves-effect waves-light"  onClick = {this.purchaseShare} >SIGNUP
          <i class="material-icons right">lock_open</i>
          </button>
          </div>
          </div>
           </form>
       </div>
       </div>

       </div>
    </div>
    <div class="col m4"></div>

    </div>
 
    )
  }
}

export default Signup;
