import React from 'react'
import Post from '../../Post'
export default function index() {
    const arr = [1, 32, 5, 6];
    return (
        <div class="col-lg-8 col-md-8 mt-4">
            <div class="row">
                <div class="col-lg-8 breadcrumbf">
                    <a href="#">Borderlands 2</a> <span class="diviver">&gt;</span> <a href="#">General Discussion</a> <span class="diviver">&gt;</span> <a href="#">New Topic</a>
                </div>
            </div>
            <div className="post">
                <form action="#" className="form newtopic" method="post">
                    <div className="topwrap">
                        <div className="userinfo pull-left">
                            <div className="avatar">
                                <img src={require('../../../Assets/images/avatar4.jpg')} alt="" />
                                <div className="status red">&nbsp;</div>
                            </div>

                            <div className="icons">
                                <img src={require('../../../Assets/images/icon3.jpg')} alt="" />
                                <img src={require('../../../Assets/images/icon4.jpg')} alt="" />
                                <img src={require('../../../Assets/images/icon5.jpg')} alt="" />
                                <img src={require('../../../Assets/images/icon6.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="posttext pull-left">

                            <div>
                                <input type="text" placeholder="Enter Topic Title" className="form-control" />
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <select name="category" id="category" className="form-control" >
                                        <option value="" disabled selected>Select Category</option>
                                        <option value="op1">Option1</option>
                                        <option value="op2">Option2</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <select name="subcategory" id="subcategory" className="form-control" >
                                        <option value="" disabled selected>Select Subcategory</option>
                                        <option value="op1">Option1</option>
                                        <option value="op2">Option2</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <textarea name="desc" id="desc" placeholder="Description" className="form-control" ></textarea>
                            </div>
                            <div className="row newtopcheckbox">
                                <div className="col-lg-6 col-md-6">
                                    <div><p>Who can see this?</p></div>
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
                                        <p>Share on Social Networks</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="fb" /> <i className="fa fa-facebook-square"></i>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="tw" /> <i className="fa fa-twitter"></i>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="gp" /> <i className="fa fa-google-plus-square"></i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="postinfobot">

                        <div className="notechbox pull-left">
                            <input type="checkbox" id="gp" />
                        </div>

                        <div className="pull-left">
                            <label for="note"> Email me when some one post a reply</label>
                        </div>

                        <div className="pull-right postreply">
                            <div className="pull-left smile"><a href="#"><i className="fa fa-smile-o"></i></a></div>
                            <div className="pull-left"><button type="submit" className="btn btn-primary">Post</button></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </form>
                <div class="row similarposts mt-4">
                    <div class="col-lg-10"><i class="fa fa-info-circle"></i> <p>Similar Posts according to your <a href="#">Topic Title</a>.</p></div>
                    <div class="col-lg-2 loading"><i class="fa fa-spinner"></i></div>

                </div>
                <div className='mt-3'>
                    {
                        arr.map(() => {
                            return (
                                <Post />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
