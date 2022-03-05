import {AppBar, Box, Toolbar, Typography,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = ()=>{
    return<>
    <Box sx={{flexGrow:1}} >
       <AppBar position="static" color='primary'> 
            <Toolbar >
                
                <Typography variant='h4' component ="div"   sx={{flexGrow:1}}>
                    Library Management System
                </Typography>
                <div class="navbar">
                <Button component={NavLink} to="/Contact"  >Contact</Button>

                 <Button component={NavLink} to="/LoginForm" >Login</Button>
                 </div>
            </Toolbar>
            <Toolbar class="active">
            <Typography >
                  <div class="navbar" >
                        <a href="/" >Home</a>
                        <a href="/AboutLibrary" >About Library</a>
                        <a href="/Department" >Department</a>
                        <a href="/EBook" >E-Book</a>
                        <a href="/Services" >Sevices</a>
                        <a href="/FeedBack" >Feedback</a>
                        <a href="/FAQ">FAQ</a>
                    </div>
                 </Typography>
            </Toolbar>
       </AppBar>
    </Box>
    {/* style={({isActive}) => 
                { return { backgroundColor: isActive ? '#6d1b7b' : ''}}} sx={{color:'white' , textTransform:'none'}}  */}
    </>;
};
export default Navbar;