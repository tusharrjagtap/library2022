import React, { useState } from "react";
import Validation from "../component/Validation";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  //setting errors to empty object
  const [errors, setErrors] = useState({});
  //setting defalut values
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  // on typing values it will get stored here
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.email]: event.target.value
    });
  };
  //to avoid refreshment of page after clicking login
  const handleLogin = (event) => {
    event.preventDefault();
    //calling validation
    setErrors(Validation(values));
  };
  return (
    // <div className="container" style={{ marginTop: "-90px" }}>
    //   <div className="app-wrapper">
    //     <div>
    //       <h2 className="title"> Log in</h2>
    //     </div>
    //     <form className="form-wrapper">
    //       <div className="email">
    //         <label className="label"> UserName/Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           className="input"
    //           name="email"
    //           value={values.email}
    //           onChange={handleChange}
    //         />
    //         {errors.email && <p className="error">{errors.email}</p>}
    //       </div>
    //       <div className="password">
    //         <label className="label"> Password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           className="input"
    //           name="password"
    //           value={values.password}
    //           onChange={handleChange}
    //         />
    //         {errors.password && <p className="error">{errors.password}</p>}
    //       </div>
    //       <div>
    //         <button
    //           type="submit"
    //           className="submit"
    //           onClick={(event) => handleLogin(event)}
    //         >
    //           LOGIN
    //         </button>
    //         <button
    //           type="button"
    //           className="cancel"
    //           onClick={<link to="/"></link>}
    //         >
    //           {" "}
    //           Back{" "}
    //         </button>

    //         <Link to="/ForgetPass">
    //           <button className="newUser">Forget Password/Username</button>
    //         </Link>
    //       </div>

    //       <from></from>
    //     </form>
    //   </div>
    // </div>
    <div className="back container fluid">
      <div
        class="lcontainer"
        style={{ marginTop: "250px", marginBottom: "100px" }}
      >
        <div class="brand-logo"></div>
        <div class="brand-title">Login To Your Account</div>
        <br />
        <div class="linputs">
          <label>EMAIL</label>    
             <input
              type="email"
              name="email"
              id="email"
              
              // name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="example@test.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          {/* <input type="email" placeholder="example@test.com" /> */}
          <label>PASSWORD</label>
              <input
              type="password"
              name="password"
              id="password"
              // name="password"
              placeholder="Min 6 charaters long" 
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          {/* <input type="password" placeholder="Min 6 charaters long" /> */}
          {/* <button type="submit">LOGIN</button> */}
          <button
              type="submit"
              onClick={(event) => handleLogin(event)}
            >
              LOGIN
            </button>
            
        </div>
      </div>
    </div>
  );
}

export default Login;