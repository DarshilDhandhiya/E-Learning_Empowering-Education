import { useCookies } from "react-cookie";

function IsLogin() {
    let [cookie, setCookie] = useCookies('user');

    if (cookie.userid === undefined) {
        alert("Please Log In");
        window.location = '/adminlogin';
    }
}
export default IsLogin;