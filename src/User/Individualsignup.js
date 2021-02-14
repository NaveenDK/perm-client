import React , {Component} from 'react'
import {Link} from 'react-router-dom';


class Individualsignup extends Component{

    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            mobile:"",
            organization:"",
            error:"",
            confirmpassword:"",
            open:false
        }
    }

    handleChange = (name) => (event)=>{
        this.setState({
            [name]:event.target.value
        });

        console.log("select -", name )
        console.log("event.target.value-", event.target.value)

    }

    clickSubmit = event=>{
        event.preventDefault();
        
        const {name,email, password,mobile,organization,confirmpassword} = this.state

        const individual = {
            name,
            email,
            password,
            mobile,
            organization,
            confirmpassword
        }

      
     this.individualSignup(individual)
     .then(data=>{
         if(data.error) this.setState({error:data.error})
            else this.setState({

                error: "",
                name: "",
                email:"",
                password:"",
                  organization:"",
                  confirmpassword:"",
                open:true,
              

            })
        
     })
    }

    individualSignup = (individual) =>{
      return  fetch('http://167.172.143.94/signup',{
            method:"POST",
            headers:{
                 Accept:"application/JSON",
                 
                 "Content-type":"application/json"
 
            },
 
            body:JSON.stringify(individual)
         })
            .then(
                response=>{
                    return response.json()
 
                }
            )
             .catch(err=>{
                 console.log(err)
             })

    }

    individualSignupForm = (name, email, password,mobile,organization,confirmpassword) =>(
        
        <form>
        <select onChange={this.handleChange("organization")}  value={organization}  class="custom-select custom-select-lg mb-3">
                    <option selected>Not assigned yet</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
        </select>
        <div className="form-group">
            <label className="text-muted"> 
                Name
            </label>
            <input onChange={this.handleChange("name")} type="text" className="form-control" value={name}>
            </input>
        </div>
        <div className="form-group">
            <label className="text-muted">
                Email
            </label>
            <input onChange={this.handleChange("email")} type="email" className="form-control" value={email}>
            </input>
        </div>
        
        <div className="form-group">
            <label className="text-muted">
                Mobile
            </label>
            <input onChange={this.handleChange("mobile")} type="text" className="form-control" value={mobile}>
            </input>
        </div>

        <div className="form-group">
            <label className="text-muted">
                Password
            </label>
            <input onChange={this.handleChange("password")} type="password" className="form-control" value={password}>
            </input>
        </div>
        <div className="form-group">
            <label className="text-muted">
                Confirm Password
            </label>
            <input onChange={this.handleChange("confirmpassword")} type="password" className="form-control" value={confirmpassword}>
            </input>
        </div>
        <button type="submit" onClick={this.clickSubmit} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/signin" >log in?</Link>
                </p>
     </form>
    )


    render(){
        //const {}
        const {name, email, password, error,open,mobile,organization,confirmpassword} = this.state

        return(
            <div className="container biggerFormBox">
                <h2 className="mt-5 mb-5"> 
                For Members
                </h2>

                <div className="alert alert-primary" style={{

                    display:error?"":"none"
                }}>
                        {error}
                </div>

               
                
                <div className="alert alert-info" style={{
                    display:open?"":"none"
                }}>
                 New Account is successfully created, please <Link to="/signin" >sign in.</Link>
                </div>

                {this.individualSignupForm(name, email, password,mobile,organization,confirmpassword)}
            </div>
        )
    }
}

export default Individualsignup