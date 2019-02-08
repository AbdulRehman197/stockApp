import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
// import SellerBuyer from '../sellerBuyer/sellerBuyer'
import { userUpdate  } from '../../redux/actions/index'

import Transaction from '../Transactions/transactions'


class UserManage extends Component {
    constructor(){
      super();
      this.state = {
        blance:'',
      }
    }
  
  componentDidUpdate(){
      let self = this
      axios.get('/user')
    .then(function (response) {
      let newUser = response.data.user
     self.props.userUpdate(newUser);
    })
    .catch(function (error) {
      console.log(error);
    });

    
    }
  
    
    sellShare = () =>{
      axios.post('/api/sellshare', {
        blance:this.state.blance
      })
      }
  
      purchaseShare = () =>{
        axios.post('/api/puchaseshare', {
          blance:this.state.blance
        });
        }
  
    onFormChange = (e) =>{
      this.setState({[e.target.name] : e.target.value })
    
    }
    onFormSubmit = (e) =>{
      e.preventDefault();
      e.target.value = ''
    
    }
  
    
    render() {
      let user = this.props.user
      return (
        <div>

         { /* User Information */}
         <div className = 'row'>
         <div class="col s12 m6">
          <div style = {{paddingTop:'1%'}} className='user'>
          <div className ='profilePic'></div>
          <span >
              <h4 className = 'title'>User</h4>
              <hr noshade width="70%"  />
              <h6>UserName : {user.username}</h6>
              <h6>Blance : {user.blance}</h6>
          </span>
          </div>
          </div>
         <div class="col s12 m6">
          <div  style = {{paddingTop:'1%'}}  className  = "blance" >
              <form onSubmit = {this.onFormSubmit} >
          <span>
          <div className ='profilePic'></div>
          <h4>Seller Buyer</h4>        
          </span>
              <div>
              <div class="input-field inline">
            <input id="email_inline" type="text"   name = 'blance' value = {this.state.blance} onChange = {this.onFormChange}  />
            <label for="email_inline" style = {{color:'black',opacity:'0.5'}}>Blance</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          
            
              <button class="btn red lighten-1 waves-effect waves-light" style = {{margin:'11px'}}  onClick = {this.sellShare} >SELLER
             <i class="material-icons right">monetization_on</i>
             </button>
             <button class="btn red lighten-1 waves-effect waves-light"  onClick = {this.purchaseShare} >PURCHASE
             <i class="material-icons right">local_grocery_store</i>
             </button>
             </div>
            
              </div>
              </form>
          </div>
       </div>
       </div>
        </div>
      )
    }
  
  }
  
  const mapStateToProps = (state) => ({
    user:state.userInformation.payload
    
  })
  const mapDispatchToProps = (dispatch) => ({
    userUpdate : user => dispatch(userUpdate(user)),
    // transaction : tras => dispatch(transactions(tras))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(UserManage)