import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-1 col-xs-3 col-sm-2 logo "><Link to={"/"}><img src={require('../../Assets/images/logo.jpg')}  alt="" /></Link></div>
                    <div class="col-lg-8 col-xs-9 col-sm-5 ">Copyrights 2014, websitename.com</div>
                    <div class="col-lg-3 col-xs-12 col-sm-5 sociconcent">
                        <ul class="socialicons">
                            <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i class="fa fa-cloud"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
