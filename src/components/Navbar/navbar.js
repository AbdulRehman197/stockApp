import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';





 
class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{},
      login:false
    }
  }
  

  componentDidMount(){
    let self = this
    axios.get('/user').then(function (response) {
      let newUser = response.data.user
     self.setState({
       user:newUser,
     })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
  logout = () =>{
    axios.post('/user/logout')
    .then(this.setState({login:false}))
    .catch(function (error) {
      console.log(error);
    });

  }
  render() {
    return (

      <div>
      <nav >
    <div  className="nav-wrapper" style = {{marginLeft:'2%'}}>
    <Link to = '/' >Home</Link>
    { 
      this.state.user.username ?  <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to = '/' >Dashboard</Link></li>
      <li><Link to = '/transactions' >Transaction</Link></li>
      <li onClick = {this.logout} ><button  class="btn red lighten-1 waves-effect waves-light">Logout</button></li>
     </ul> :
  <ul id="nav-mobile" className="right hide-on-med-and-down">
  <li><Link to = '/signup' >Signup</Link></li>
<li><Link to = '/login' >Login</Link></li> 
</ul> 
    
      
      
    }
  
    
    </div>
  </nav>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  user:state.userInformation.payload
})


export default connect(mapStateToProps,null)(Navbar)
