import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function index() {
    return (
        <div className="headernav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-xs-3 col-sm-2 col-md-2 logo ">
                        <Link to={"/"}>
                            <img src={require('../../Assets/images/logo.jpg')} alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-xs-9 col-sm-5 col-md-3 mt-3">
                        <DropdownButton
                            as={ButtonGroup}
                            title={"Borderlands 2"}
                        >
                            <Dropdown.Item eventKey="1">Borderlands</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Borderlands 1</Dropdown.Item>
                            <Dropdown.Item eventKey="3">
                                Borderlands 3
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="col-lg-4 search hidden-xs hidden-sm col-md-3">
                        <div className="wrap">
                            <form action="#" method="post" className="form">
                                <div className="pull-left txt"><input type="text" className="form-control" placeholder="Search Topics" /></div>
                                <div className="pull-right">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search"></i>
                                    </button></div>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12 col-sm-5 col-md-4 avt">
                        <div className="stnt pull-left">
                            <form action="03_new_topic.html" method="post" className="form">
                                <Link to={"/create-topic"}>
                                    <button className="btn btn-primary">Start New Topic</button>
                                </Link>
                            </form>
                        </div>
                        <div className="env pull-left">
                            <i className="fa fa-envelope"></i>
                        </div>

                        <div className="avatar pull-left dropdown d-flex">
                            <a data-toggle="dropdown" href="#"><img src={require('../../Assets/images/avatar.jpg')} alt="" /></a> <b className="caret"></b>
                            <div className="status green">&nbsp;</div>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title=""
                                className='mx-1 my-2'
                            >
                                <NavDropdown.Item ><Link to={"/"}>My Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={"/"}>
                                    Inbox
                                </Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to={"/"}>Logout</Link></NavDropdown.Item>
                                <NavDropdown.Item href="/create-account"><Link to={"/create-account"}>Create Account</Link></NavDropdown.Item>
                            </NavDropdown>
                            {/* <ul className="dropdown-menu" role="menu">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">My Profile</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-2" href="#">Inbox</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-3" href="#">Log Out</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-4" href="04_new_account.html">Create account</a></li>
                            </ul> */}
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
