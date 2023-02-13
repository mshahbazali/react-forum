import React from 'react'

export default function index() {
    return (
        <div className="col-lg-8 col-md-8">
            <div className="post">
                <form action="#" className="form newtopic" method="post">
                    <div className="postinfotop">
                        <h2>Create New Account</h2>
                    </div>

                    <div className="accsection">
                        <div className="acccap">
                            <div className="userinfo pull-left">&nbsp;</div>
                            <div className="posttext pull-left">
                                <h3>Required Fields</h3>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="topwrap">
                            <div className="userinfo pull-left">
                                <div className="avatar">
                                    <img src={require("../../../Assets/images/avatar-blank.jpg")} alt="" />
                                    <div className="status green">&nbsp;</div>
                                </div>
                                <div className="imgsize">60 x 60</div>
                                <div>
                                    <button className="btn">Add</button>
                                </div>
                            </div>
                            <div className="posttext pull-left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <input type="text" placeholder="First Name" className="form-control" />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <input type="text" placeholder="Last Name" className="form-control" />
                                    </div>
                                </div>
                                <div>
                                    <input type="text" placeholder="User Name" className="form-control" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <input type="password" placeholder="Password" className="form-control"
                                            id="pass" name="pass" />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <input type="password" placeholder="Retype Password"
                                            className="form-control" id="pass2" name="pass2" />
                                    </div>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="accsection privacy">
                        <div className="acccap">
                            <div className="userinfo pull-left">&nbsp;</div>
                            <div className="posttext pull-left">
                                <h3>Privacy</h3>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="topwrap">
                            <div className="userinfo pull-left">&nbsp;</div>
                            <div className="posttext pull-left">

                                <div className="row newtopcheckbox">
                                    <div className="col-lg-6 col-md-6">
                                        <div>
                                            <p>Who can see my Profile?</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="everyone" /> Everyone
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="friends" /> Only Friends
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div>
                                            <p>Share posts on Social Networks</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="fb" /> <i
                                                            className="fa fa-facebook-square"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="tw" /> <i
                                                            className="fa fa-twitter"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="gp" /> <i
                                                            className="fa fa-google-plus-square"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="accsection survey">
                        <div className="acccap">
                            <div className="userinfo pull-left">&nbsp;</div>
                            <div className="posttext pull-left">
                                <div className="htext">
                                    <h3>Small Survey ( Optional )</h3>
                                </div>
                                <div className="hnotice">
                                    Answer this survey and Earn this Badge : <img src={require("../../../Assets/images/icon5.jpg")}
                                        alt="" />
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="topwrap">
                            <div className="userinfo pull-left">&nbsp;</div>
                            <div className="posttext pull-left">

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <select name="old" id="old" className="form-control">
                                            <option value="" disabled selected>How Old are you?</option>
                                            <option value="op1">Option1</option>
                                            <option value="op2">Option2</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select name="who" id="who" className="form-control">
                                            <option value="" disabled selected>Who are you?</option>
                                            <option value="op1">Option1</option>
                                            <option value="op2">Option2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <select name="help" id="help" className="form-control">
                                            <option value="" disabled selected>Will you help others here?
                                            </option>
                                            <option value="op1">Option1</option>
                                            <option value="op2">Option2</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <select name="hear" id="hear" className="form-control">
                                            <option value="" disabled selected>Where do you hear about us?
                                            </option>
                                            <option value="op1">Option1</option>
                                            <option value="op2">Option2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row newtopcheckbox">
                                    <div className="col-lg-6 col-md-6">
                                        <div>
                                            <p>Some other question 1</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="everyone2" /> option 1
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="friends2" /> option 2
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div>
                                            <p>Some other question 2</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="fb2" /> option 1
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="tw2" /> option 2
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>





                    <div className="accsection networks">
                        <div className="acccap">
                            <div className="userinfo pull-left">&nbsp;</div>
                            <div className="posttext pull-left">
                                <div className="htext">
                                    <h3>Social Networks ( Optional )</h3>
                                </div>
                                <div className="hnotice">
                                    Link Social Networks and Earn this Badge : <img src="images/icon6.jpg"
                                        alt="" />
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="topwrap">
                            <div className="userinfo pull-left">&nbsp;</div>
                            <div className="posttext pull-left">

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <button className="btn btn-fb">Link Facebook Account</button>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <button className="btn btn-tw">Link Twitter Account</button>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <button className="btn btn-gp">Link Google + Account</button>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <button className="btn btn-pin">Link Pinterest Account</button>
                                    </div>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="postinfobot">

                        <div className="notechbox pull-left">
                            <input type="checkbox" id="friends2" />
                        </div>

                        <div className="pull-left lblfch">
                            <label for="note"> I agree with the Terms and Conditions of this site</label>
                        </div>

                        <div className="pull-right postreply">
                            <div className="pull-left smile"><a href="#"><i className="fa fa-smile-o"></i></a></div>
                            <div className="pull-left"><button type="submit" className="btn btn-primary">Sign
                                Up</button></div>
                            <div className="clearfix"></div>
                        </div>


                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
