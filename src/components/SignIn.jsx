import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignIn extends Component {

  login() {
    const userObject = {
      username: document.getElementById("inputEmail").value || null,
      password: document.getElementById("inputPassword").value || null,
    };
<<<<<<< HEAD

    putData('/signin', userObject)
      .then((res) => console.log("This is after function call", JSON.stringify(res)))
      .catch((err) => console.log("If err", err))
=======
    putData('http://markzeagler.com/ledger-backend/signin', userObject)
    .then((res) => {
      const result = {
        message: res.message,
        status: res.status_code
      };
      console.log("result is ", result);
      if (!result.status || result.status !== 200) {
        console.log('server threw an error');
      }
    return window.location = "/ledger/home";
    })
    .catch((err) => console.log("If err", err))
>>>>>>> master

    function putData(url, data) {
      console.log("Makind sure data is passed", data);
      return fetch(url,  {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
      }).then(response => response.json());
    }
  }


  render() {
    document.body.classList.add("gradient");
    return (
      <div className="main-border">
      <form className="form-signin">
      <img className="i1" src="logo.png" alt="logo"/>
      <h1>LOGIN</h1>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email" required=""/>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
      <button className="sb btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>LOGIN</button>
      <p className="links" align="left" margin-top="10px">&#x25C8;&nbsp;
        <Link to="/forgot">Forgot password?</Link><br/>
        &#x25C8;&nbsp;
        <Link to="/signup">Create account</Link>
      </p>
      <p className="mt-5 mb-3 text-muted" align="left">© 2018</p>
    </form>
    </div>
  )
  }
}

export default SignIn;
