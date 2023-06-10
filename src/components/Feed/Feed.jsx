import React from 'react'
import './Feed.css'
import Share from '../Share/Share';
import Post from '../Post/Post';
function Feed() {
    return (
        <div className='Feed'>
            <div className='FeedWrapper'>
                <Share />
                <Post/>
                <Post/>
            </div>

        </div>
    )
}
export default Feed;
