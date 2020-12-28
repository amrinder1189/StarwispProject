import React from 'react'
import {Link} from 'react-router-dom'

function Menubar() {
  return (
    <div className="menu-body">
     <ul className='menu-list'>
       <Link to='/'>
         <li className='menu-list-item'><i class="fas fa-box"></i>Dashboard</li>
       </Link>
       <Link to='/post' >
         <li className='menu-list-item'><i class="fas fa-user-graduate"></i>Share Post</li>
       </Link>
       <Link to='/setting'>
         <li className='menu-list-item'><i class="fas fa-sliders-h"></i>Setting</li>
       </Link>
     </ul>
    </div>
  );
}

export default Menubar;
