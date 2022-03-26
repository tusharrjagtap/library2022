import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary" className="AppBar">
          <Toolbar>
            <Typography
              className="IACSD"
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <h3>
                {" "}
                <img
                  className="logo"
                  src="https://thumbs.dreamstime.com/b/open-book-profit-icons-above-close-up-hd-video-big-concept-221172255.jpg "
                />{" "}
                &nbsp;&nbsp;IACSD Library
              </h3>
            </Typography>
            <div class="navbar">
              <Button component={NavLink} to="/Contact">
                Contact
              </Button>

              <Button component={NavLink} to="/Login">
                Login
              </Button>
            </div>
          </Toolbar>
          <Toolbar class="active">
            <Typography>
              <div class="navbar">
                <a href="/">Home</a>
                <a href="/AboutLibrary">About Library</a>
                <a href="/Department">Department</a>
                <a href="/EBook">E-Book</a>
                <a href="/Services">Sevices</a>
                <a href="/FeedBack">Feedback</a>
                <a href="/FAQ">FAQ</a>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* style={({isActive}) => 
                { return { backgroundColor: isActive ? '#6d1b7b' : ''}}} sx={{color:'white' , textTransform:'none'}}  */}
    </>
  );
};
export default Navbar;
