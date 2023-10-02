import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import IsLogin from "./AdminLogin/CookieForFunctions";
import AdminUpload from "./AdminUpload";
import Back from "../Common/back/Back"


function AdminHome() {

        IsLogin();

        return (<>
            <Back title='Admin Upload Files' />
            <h1>Select Standards</h1>
            <AdminUpload/>
        </>)
    }
export default AdminHome;