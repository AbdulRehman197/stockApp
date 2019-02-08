import React, { Component } from 'react';
// import './transactions.css';

import axios from 'axios';
import { connect } from 'react-redux';
import { transactions } from '../../redux/actions/index'


class Transaction extends Component {
  constructor(props){
    super(props);
    this.state = {
      transactions:[]
    }
  }
  componentDidMount(){
    let self = this
    axios.get('/api/transactions', )
    .then(function (response) {
            let newresponse = response.data
            console.log(newresponse)
            self.props.transaction(newresponse)
            self.setState({
              transactions:newresponse
            })
          })
          .catch(function (error) {
            console.log(error);
          });
          
        }
        render() {   
          console.log(this.props)
return (
    
<div style = {{maxWidth :'90%',margin:' 0 auto'}}>
{this.state.transactions.length ? 

<table className ='responsive-table'>
 <thead>
   <tr>
     <th>ID</th>
     <th>Qty</th>
     <th>Blance</th>
     <th>Date</th>
   </tr>
 </thead>
 <tbody>
  {this.state.transactions.map((item) =>{
    return  <tr key = {item._id}>
    <td>{item._id[8]}</td>
    <td>{item.qty}</td>
    <td>{item.amount}</td>
    <td>{item.date}</td>
  </tr>
  })}
 </tbody>
</table> :
   <div style = {{margin:'21% 46%'}}>
   <div class="preloader-background">
<div class="preloader-wrapper big active">
  <div class="spinner-layer spinner-blue-only">
    <div class="circle-clipper left">
      <div class="circle"></div>
    </div>
    <div class="gap-patch">
      <div class="circle"></div>
    </div>
    <div class="circle-clipper right">
      <div class="circle"></div>
    </div>
  </div>
</div>
</div>
</div>
 }
</div>

      );
    }
  }

  
// const mapStateToProps = (state) =>({
//   traninfo:state.transInformation
// })
  const mapDispatchToProps = (dispatch) => ({
    transaction : tras => dispatch(transactions(tras))
  })
  export default connect(null,mapDispatchToProps)(Transaction)