import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUSer} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        createUSer(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <div>
      <Navbar />
      <div>
        <h2 className="text-2xl text-center font-semibold mt-4">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name='name'
              placeholder="Please Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name='photo'
              placeholder="Please Enter Your Photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="Please Enter Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="Please Enter Your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">Already Have an account? <Link to='/login' className="text-blue-700 font-semibold">Login</Link></p>
      </div>
    </div>
    );
};

export default Register;