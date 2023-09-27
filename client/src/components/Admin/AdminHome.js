import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import IsLogin from "./AdminLogin/CookieForFunctions";
import AdminUpload from "./AdminUpload";


function AdminHome() {

        IsLogin();

        return (<>
            <AdminUpload/>
            <h1>Admin Homee</h1>
        </>)
    }
export default AdminHome;