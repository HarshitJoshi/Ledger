import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class SignIn extends Component {
  handleClick() {
    fetch('http://markzeagler.com/ledger-backend/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: 'email', password_hash: 'pass'})
    }).then(response => response.json())
  }
  render() {
    document.body.classList.add("gradient");
    return (<form className="form-signin">
      <img className="i1" src="logo.png" alt="logo"/>
      <h1>LOGIN-1</h1>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email" required="" autoFocus=""/>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
      <button className="sb btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick}>LOGIN</button>
      <p className="links" align="left" margin-top="10px">&#x25C8;&nbsp;
        <Link to="/forgot">Forgot password?</Link><br/>
        &#x25C8;&nbsp;
        <Link to="/signup">Create account</Link>
      </p>
      <p className="mt-5 mb-3 text-muted" align="left">© 2018</p>
    </form>)
  }
}

export default SignIn;
