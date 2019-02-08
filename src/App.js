import React, { Component } from 'react';
import Dashboard from './components/Dashboard/dashboard'
import Transaction from './components/Transactions/transactions'
import Signup from './components/Signup/signup';
import Login from './components/Login/login';
import Navbar from './components/Navbar/navbar';
import axios from 'axios';



import { BrowserRouter as Router, Route ,Redirect } from "react-router-dom";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      totalblance:{},
      login:false
    }
  }
  componentDidMount(){
    let self = this
    axios.get('/api/totalblance')
  .then(function (response) {
    console.log(response)
    let blance = response.data[0].blance
   self.setState({totalblance :blance,
  login:true});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    return (
      <div>
         {/* {(this.state.login) ?   */}
     <Router>
     <div>
     <Navbar />
       <Route exact path= '/' component = {Dashboard} />
       <Route path= '/transactions' component = {Transaction} />
       <Route path= '/signup' component = {Signup} />
       <Route path= '/login' component = {Login} />
     </div>
     </Router> :  
     {/* <div style = {{margin:'21% 46%'}}>
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
} */}
      </div>
    );
  }
}

export default App;
