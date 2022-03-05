import React from 'react';
import {Button} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
export default function Welcome(){
    return(
        
    <div class="container">
  <div class="row">
      <h1>Welcome to Admin Page</h1>
    <Link to="/AddUser"><button className='newUser'>New User Registration</button></Link>
    <Link to="/UserList"><button className='newUser'>View User list</button></Link>

    <Link to="/AddStaff"><button className='newUser'>New Staff Registration</button></Link>
    <Link to="/StaffList"><button className='newUser'>View Staff list</button></Link>
 
  </div>
  </div>
    
    )
}