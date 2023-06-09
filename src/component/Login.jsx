import React, {  useRef } from 'react'
import { loginUser } from '../data/user';

function Login(props) {
  const fName = useRef();
  const fEmail = useRef();
  const fMobile = useRef();
  const fPass = useRef();

  // submithandler
  const submotHandler = async (e) => {
    e.preventDefault();
      const data = {
        email: fEmail.current.value,
        password: fPass.current.value 
      };

      console.log('login  =' , data);
      await loginUser(data);
  }

  return (
    <div className="container">
        <div className="row">
            <div className="coi-md-12 text-center">
                <h1 className="dispaly-3 text-dark">Login</h1>
            </div>
        </div> 
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form autoComplete="off" onSubmit={submotHandler}>

                <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" ref={fEmail} className="form-control" required/>
                  </div>

                  <div className="form-group mt-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={fPass} className="form-control" required/>
                  </div>

                  <div className="form-group mt-2">
                    <input type="submit" name="" id="" value="Login" className="btn btn-outline-success" />
                  </div>

                </form>
              </div>
            </div>
          </div>
          </div>   
    </div>
  )
}

export default Login
