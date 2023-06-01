import React,{ useRef } from 'react'
import { registerUser  } from '../data/user'; // typed import / named import


function Register(props) {
  const fName = useRef();
  const fEmail = useRef();
  const fMobile = useRef();
  const fPass = useRef();

  //submithandler

  const submithandler = async (e) => {
    e.preventDefault();
    const data = {
      name: fName.current.value,
      email: fEmail.current.value,
      mobile: fMobile.current.value ,
      password: fPass.current.value
      
    };

    console.log('new data =' , data);
    await registerUser(data);
  }
  return (
    <div className="container">
        <div className="row">
            <div className="coi-md-12 text-center">
                <h1 className="dispaly-3 text-dark">Register</h1>
            </div>
        </div> 

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form autoComplete="off" onSubmit={submithandler}>

                  <div className="form-group mt-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"  ref={fName} className="form-control" required/>
                  </div>

                  <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" ref={fEmail} className="form-control" required/>
                  </div>

                  <div className="form-group mt-2">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" name="mobile" id="mobile" ref={fMobile} className="form-control" required/>
                  </div>

                  <div className="form-group mt-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={fPass} className="form-control" required/>
                  </div>

                  <div className="form-group mt-2">
                    <input type="submit" name="" id="" value="Register" className="btn btn-outline-success" />
                  </div>

                </form>
              </div>
            </div>
          </div>
       </div>   
    </div>
  )
}

export default Register
