import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Style/style.css'
import '../../Style//Custom/custom.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import Header from '../../Layout/Header'
import Post from '../../Layout/Post'
import SideBar from '../../Layout/SideBar'
import Footer from '../../Layout/Footer'
import Pagination from '../../Layout/Pagination'
import NewTopicForm from '../../Components/Form/NewTopic'
export default function Index() {
    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                <div className="row">
                    <NewTopicForm />
                    <SideBar />
                </div>
            </div>
            <Pagination />
            <Footer />
        </div>
    )
}
