import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, 
DropdownItem,Navbar, NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,
    UncontrolledDropdown,NavbarText } from 'reactstrap';


const isActive = (history,path)=>{
    if(history.location.pathname === path)  return {

        color:'#bfb8b8',
        

    }
    else return {
        color:'#000000'
        
    }
}

export const signout = (next)=>{
    if (typeof window!== "undefined") localStorage.removeItem("jwt")
    next()
    return fetch("http://localhost:8083/signout", {
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err=>console.log(err))
}



export const isAuthenticated = () =>{
    if(typeof window == "undefined")
    {
        return false
    }

    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }


}



const Menu = ({history}) =>
{
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
return(  
    <div>
        
       {/* <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
            <Link className="nav-link" style={isActive(history,"/")} to="/" >Home</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link"   style={isActive(history,"/signin")}  to="/signin" >Sign In</Link>
            </li>
            <li classNames="nav-item">
            <Link className="nav-link" style={isActive(history,"/welcome")}  to="/welcome" >Sign Up</Link>
            </li>
 
            <li classNames="nav-item">
            <a 
            
            className="nav-link" 
            style={
            
                (isActive(history,"/signup"),
               {cursor:"pointer", 
               color:"#fff"
                })
                
            } 
             onClick={()=>signout(()=>history.push('/'))} >Sign out</a>
        </li>
    </ul> */}
     <Navbar color="light" light expand="md">
        <NavbarBrand href="/">brandname     </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           {!isAuthenticated() &&
           (
            <NavItem>
            <Link className="nav-link" style={isActive(history,"/welcome")}  to="/welcome" >Join us</Link>
            </NavItem>
           )
           }
            
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>

           
               <NavItem>
  
           
           {isAuthenticated() &&
             <NavLink   className="nav-link" 
             style={
             
                 (isActive(history,"/signup"),
                {cursor:"pointer", 
                color:"#fff"
                 })
                 
             } 
              onClick={()=>signout(()=>history.push('/'))}  >  
             
           Sign out</NavLink>
           }


             
             </NavItem>
            
         
          {!isAuthenticated() && (
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Sign In
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link  className="nav-link"   style={isActive(history,"/signin")}  to="/signin" >Individual</Link>
                </DropdownItem>
                <DropdownItem>
                <Link  className="nav-link"   style={isActive(history,"/orgsignin")}  to="/orgsignin" >Organizations</Link>
                </DropdownItem>
                
                <DropdownItem>
                  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>)
          }
          </Nav>
       {isAuthenticated().organization &&
          
          <NavbarText>
               
              {isAuthenticated().organization.name}
              </NavbarText>
       }
              {isAuthenticated().individual &&
          
          <NavbarText>
               
              {isAuthenticated().individual.name}
              </NavbarText>
       }
        </Collapse>
      </Navbar>
    </div>
);
        }

export default withRouter(Menu);
