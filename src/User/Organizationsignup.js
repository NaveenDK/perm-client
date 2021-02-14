import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class Organizationsignup extends Component{

    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            mobile:"",
            error:"",
            open:false
        }
    }

    handleChange = (name) => (event)=>{
        this.setState({
            [name]:event.target.value
        });

    }

    clickSubmit = event=>{
        event.preventDefault();
        
        const {name,email, password, mobile,confirmpassword} = this.state

        const organization = {
            name,
            email,
            password,
            mobile,
            confirmpassword
        }

       // console.log(user);

     this.orgsignup(organization)
     .then(data=>{
         if(data.error) this.setState({error:data.error})
            else this.setState({

                error: "",
                name: "",
                email:"",
                password:"",
                mobile:"",
                open:true

            })
        
     })
    }

    orgsignup = organization =>{
        
      return  fetch('http://localhost:8083/orgsignup',{
            method:"POST",
            headers:{
                 Accept:"application/JSON",
                 
                 "Content-type":"application/json"
 
            },
 
            body:JSON.stringify(organization)
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

    orgSignupForm = (name, email, password,mobile,confirmpassword) =>(
        
        <form>
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
               Mobile Number
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
              Confirm  Password
            </label>
            <input onChange={this.handleChange("confirmpassword")} type="password" className="form-control" value={confirmpassword}>
            </input>
        </div>

        
        <button type="submit" onClick={this.clickSubmit} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/orgsignin" >log in?</Link>
                </p>
     </form>
    )


    render(){
        //const {}
        const {name, email, password, mobile, error,open,confirmpassword} = this.state

        return(
            <div className="container biggerFormBox">
                <h2 className="mt-5 mb-5"> 
                For Organizations
                </h2>

                <div className="alert alert-primary" style={{

                    display:error?"":"none"
                }}>
                        {error}
                </div>

                
                <div className="alert alert-info" style={{
                    display:open?"":"none"
                }}>
                 New Account is successfully created, please sign in.
                </div>

                {this.orgSignupForm(name, email, password,mobile,confirmpassword)}
            </div>
        )
    }
}

export default Organizationsignup