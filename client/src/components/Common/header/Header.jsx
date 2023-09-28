import "./header.css"
import Head from "./Head"
import { Nav, NavLink, Bars, NavMenu} from '../../NavbarElements';

const Header = () => {
  return (
    <>
      <Head />
      
        <Nav className='flexSB' >
        <Bars />
          <NavMenu>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/onlineExam'>OnlineExam</NavLink>
            <NavLink to='/admission'>Admission</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/media'>Media</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <div className='start'>
              <NavLink to='loginmain'>
                <div className='button'>GET START</div>
              </NavLink>
            </div>
          </NavMenu>
        </Nav>
    </>
  )
}

export default Header
