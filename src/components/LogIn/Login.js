import React, { useState } from "react";
import  classes  from './login.module.css';
import { useNavigate } from "react-router";

const Login = ( ) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const loginIn = () => {
        console.log("Logged In");
    }

    return (
    <div className={classes.loginContainer}>
    <div className={classes.container}>
        <h2>Admin Login Page</h2>
      <form className={classes.loginForm}>
        <div className={classes['input-group']}>
          <label for="email">Username:</label>
          <input type="text" id="text" name="username" required onChange={(e) => {
                setUsername(e.target.value);
          }}/>
        </div>
        <div className={classes['input-group']}>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={(e) => {
                setPassword(e.target.value);
          }}/>
        </div>
        <div className={classes['button-group']}>
          <input type="submit" value="Submit" onClick={() => {
                nav('./signup');
                loginIn();
          }}/>
          <a href="#">Forgot Password?</a>
        </div>
     </form>
    </div>
    </div>
    );
}

export default Login;