import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Signup() {

    return(
        <div className=" bg-secondary vh-100 d-flex align-items-center justify-content-center">
            <div className="bg-white p-3 h-30 rounded w-25">
            <h2>Register</h2>
                <form>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0"/>
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                    <p>Already Have an Account</p>
                    <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</button>

                </form>
            </div>
        </div>
    );
}

export default Signup;