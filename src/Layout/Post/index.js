import React from 'react'
import Post from '../../Components/Post'
export default function index() {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <div className="col-lg-8 col-md-8 mt-3">
            {
                arr.map(() => {
                    return (
                        <Post />
                    )
                })
            }
        </div>
    )
}
