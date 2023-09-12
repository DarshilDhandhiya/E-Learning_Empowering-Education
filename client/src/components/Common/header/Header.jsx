import "./header.css"
import Head from "./Head"
import { Nav, NavLink, Bars, NavMenu} from '../../NavbarElements';

const Header = () => {
  return (
    <>
      <Head />
        <Nav className='flexSB'>
        <Bars />
          <NavMenu>
            <NavLink to='/Home' activeStyle>Home</NavLink>
            <NavLink to='/Courses' activeStyle>Courses</NavLink>
            <NavLink to='/OnlineExam' activeStyle>OnlineExam</NavLink>
            <NavLink to='/Admission' activeStyle>Admission</NavLink>
            <NavLink to='/Dashboard' activeStyle>Dashboard</NavLink>
            <NavLink to='/Media' activeStyle>Media</NavLink>
            <NavLink to='/Whatsapp_Me' activeStyle>Whatsapp_Me</NavLink>
            <NavLink to='/About' activeStyle>About</NavLink>
            <NavLink to='/Contact' activeStyle>Contact</NavLink>
          </NavMenu>
        </Nav>
    </>
  )
}

export default Header
