import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        }
    }
    navToggle=()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle}/>
                        <NavbarBrand href="/">HelloSuperStar</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active"><HomeIcon/></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/chat" className="nav-link active"><ChatIcon/></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/" className="nav-link active"><NotificationsActiveIcon/></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/" className="nav-link active"><ShoppingCartIcon/></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/signup" className="nav-link">Sign Up</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
    
}

export default Navigation;