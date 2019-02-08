import React, { Component } from 'react'
import '../Signup/signup.css'

 
class SellerBuyer extends Component {
  constructor(){
    super();
    this.state = {
      blance : '',
    }
  }

  onFormChange = (e) =>{
    this.setState({[e.target.name] : e.target.value })
    console.log(e.target.value)
  }
  onFormSubmit = (e) =>{
    e.preventDefault();
  }
  render() {
   
    return (
      <div>
         <div className = "signup">
        <div className ='profilePic'></div>
        <span style = {{textAlign:'center'}}>
        <h4>Seller Buyer</h4>        
        </span>
            <div className = 'formInput'>
            <form onSubmit = {this.onFormSubmit}>
           
            <label>UserName :</label>
            <input type = 'text' name = 'blance' onChange = {this.onFormChange} /><br/>
            <button>Sell</button>
          
            </form>
            </div>
        </div>
      </div>
    )
  }
}

export default SellerBuyer;
