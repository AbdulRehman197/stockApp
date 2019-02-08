import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
// import SellerBuyer from '../sellerBuyer/sellerBuyer'
import './dashboard.css'
import { userInfo  } from '../../redux/actions/index'

import Transaction from '../Transactions/transactions'
import UserManage from '../UserManage/userManage'


 
class Dashboard extends Component {
 
 
  render() {

    return (
      <div className = 'container' style = {{margin:'0 auto'}}>
       <UserManage />     
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

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
