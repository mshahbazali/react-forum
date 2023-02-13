import React from 'react'

export default function index() {
    return (
        <div className="post">
            <div className="wrap-ut pull-left">
                <div className="userinfo pull-left">
                    <div className="avatar">
                        <img src={require('../../Assets/images/avatar.jpg')} alt="" />
                        <div className="status green">&nbsp;</div>
                    </div>

                    <div className="icons">
                        <img src={require('../../Assets/images/icon1.jpg')} alt="" />
                        <img src={require('../../Assets/images/icon4.jpg')} alt="" />
                    </div>
                </div>
                <div className="posttext pull-left">
                    <h2><a href="02_topic.html">10 Kids Unaware of Their Halloween Costume</a></h2>
                    <p>It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative.</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="postinfo pull-left">
                <div className="comments">
                    <div className="commentbg">
                        560
                        <div className="mark"></div>
                    </div>

                </div>
                <div className="views"><i className="fa fa-eye"></i> 1,568</div>
                <div className="time"><i className="fa fa-clock-o"></i> 24 min</div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}
