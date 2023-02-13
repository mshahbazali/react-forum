import React from 'react'
import Category from '../../Components/Sidebar/CategorySidebar'
import WeeklyPull from '../../Components/Sidebar/WeeklyPull'
import Threads from '../../Components/Sidebar/Threads'
export default function index() {
    return (
        <div className="col-lg-4 col-md-4 mt-3">
            <Category />
            {/* <WeeklyPull /> */}
            <Threads />
        </div>
    )
}
