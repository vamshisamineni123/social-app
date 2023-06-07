import React from 'react'
import './TopBar.css'
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
function TopBar() {
  return (
    <div className='TopBar-container'>
      <div className='TopBar-Left'>
        <span className='logo'>logo</span>
      </div>
      <div className='TopBar-center'>
        <div className='searchbar'>
          <Search />
          <input placeholder='search here for details' className='searchInput' />
        </div>
      </div>
      <div className='TopBar-right'>
        <div className='topbarlinks'>
          <span className='topbarlink'>Homepage</span>
          <span className='topbarlink'>TimeLine</span>
        </div>
        <div className='topbariconitem'>
          <Person />
          <span className='topbariconbadge'>1</span>
        </div>
        <div className='topbariconitem'>
          <Chat />
          <span className='topbariconbadge'>2</span>
        </div>
        <div className='topbariconitem'>
          <Notifications />
          <span className='topbariconbadge'>3</span>
        </div>
        <img src='/assets/socialmedia.jpeg' alt='Image is Loading'   className='topbarimage'/>
      </div>
    </div>
  )
}
export default TopBar;
