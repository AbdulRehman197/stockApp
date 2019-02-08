import React, { Component } from 'react'
import axios from 'axios';
import '../Signup/signup.css'
import'./login.css'
import { Redirect } from "react-router-dom";
import { userInfo  } from '../../redux/actions/index'
import { connect } from 'react-redux';





 
class Login extends Component {
  constructor(){
    super();
    this.state = {
      username : '',
      password:'',
      login:false
    }
  }

  onFormChange = (e) =>{
    this.setState({[e.target.name] : e.target.value })
  }
  onFormSubmit = (e) =>{
    e.preventDefault();
    let self = this
    axios.post('/user/login', {
      username:this.state.username,
      password:this.state.password
    }).then(function (response) {
      let newUser = response.data.user
     self.props.userInfo(newUser);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
   
    return (
      <div className = 'row'>
         <div class="col  m4"></div>
        <div  class="col  m4">
           <div  className = 'login'   >
        <div>
          <div style={{paddingTop:'12%'}} className ="loginElements">
              <form onSubmit = {this.onFormSubmit} >
          <div  >
             <div class="row">
          <div className ='profilePic'></div>
          <h4>LOGIN</h4>               
        <div class="input-field col s12">
          <input id="email" type="text" class="validate"  name = 'username' onChange = {this.onFormChange} value={this.state.username} />
          <label for="email" style = {{color:'black',opacity:'0.5'}}>Email</label>
        </div>
    
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" color = 'black'  name = 'password' onChange = {this.onFormChange}  value={this.state.password} /> 
          <label for="password" style = {{color:'black',opacity:'0.5'}}>Password</label>
        </div>
    
        
             <button class="btn red lighten-1 waves-effect waves-light"  onClick = {this.purchaseShare} >LOGIN
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

const mapStateToProps = (state) => ({
  user:state.userInformation.payload

})
const mapDispatchToProps = (dispatch) => ({
  userInfo : user => dispatch(userInfo(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
