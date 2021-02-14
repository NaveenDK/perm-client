import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class Welcomescreen extends Component{

 

selectPanel = ( ) =>(
        

      <form >
      <div className="formBox">
      <div className="pt-2"></div> 
      <h1 className="h3 mb-3 font-weight-normal"> Sign Up</h1>
     
      <div className="pt-5"></div> 
      <h4> Please select  <br></br> registration type</h4>
      <div className="pt-4"></div>
        <Link to="/membersignup" > <div  className="btn btn-dark btn-lg btn-block">
      I'm an individual</div>
        </Link> 
         <div className="pt-2"></div>
        <Link to="/organizationsignup" >  <div  className="btn btn-dark btn-lg btn-block">
      We're an organization </div>
            </Link>
      </div>
      </form>
    )


    render(){
        return(
            <div className="container">
                {this.selectPanel()}
            </div>
        )
    }
}

export default Welcomescreen