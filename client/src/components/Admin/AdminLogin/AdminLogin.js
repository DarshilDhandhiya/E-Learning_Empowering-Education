import axios from "axios";
import { React, useEffect, useState } from "react";
import "./AdminLogin.css"
import Back from '../../Common/back/Back';
import BaseAddress from './BaseAddress';
import { useCookies } from "react-cookie";

function AdminLogin() {

    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [cookie,setCookie] = useCookies('user');

    let ConfirmLogin = function (event) {
        console.log(email);
        console.log(password);
        event.preventDefault();

        let ApiAddress = BaseAddress() + "login.php";
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        axios({
            method: 'post',
            url: ApiAddress,
            encType: 'json',
            data: formData
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    alert(data[0]['error']);
                }
                else if(data[1]['success'] == 'no')
                {
                    alert(data[2]['message']);
                }
                else if (data[1]['success'] == 'yes') 
                {
                    setCookie('userid',data[3]['id'],{path:'/'});
                    alert(data[2]['message']);
                    window.location = '/adminhome';
                }
            }
        });
    }

    return (
        <>
            <Back title='Admin Login' />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 offset-3">
                        <div className="card shadow">
                            <div className="card-header text-bg-primary">
                                <h2>Admin Login</h2>
                            </div>
                            <div className="card-body">
                                <form method="post" encType="multipart-form-data" onSubmit={(event) => ConfirmLogin(event)}>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button> <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminLogin;