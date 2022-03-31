
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddUser from './component/labRegister/AddUser';
import Login from './admin/Login';
import Logout from './admin/Logout';
import Welcome from './admin/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './component/list/UserList'
import StaffList from './component/list/StaffList';
import AddStaff from './component/labRegister/AddStaff';
import Header from './component/Header';
import Footer from "./component/Footer";
import Home from './component/Home';
import "./App.css"
// import AdminLogin from './admin/AdminLogin'


function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      
        <div className="container">
        
          <Switch>
            <Route exact  path="/" component={Home} />
            {/* <Route  path="/AdminLogin" component={AdminLogin} /> */}
            <Route  path="/Login" component={Login} />
            <Route  path="/Logout" component={Logout} />
            <Route  path="/Welcome" component={Welcome} />
            <Route  path="/UserList" component={UserList} />
            <Route path="/AddUser" component={AddUser} />
            <Route path="/users/edit/:id" component={AddUser} />

            <Route  path="/StaffList" component={StaffList} />
            <Route path="/AddStaff" component={AddStaff} />
            <Route path="/staffs/edit/:id" component={AddStaff} />
            <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          </Switch>
        </div>
        <Footer/>
      
    </BrowserRouter>
  );
}


export default App;
