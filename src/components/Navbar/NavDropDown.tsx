import { NavDropdown } from 'react-bootstrap'
import cn from 'classnames'
import styles from './Navbar.module.css'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

export const NavDropDown = (): JSX.Element => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <NavDropdown
      title="PageGroup3"
      id="PageGroup3id"
      className={cn(
        styles.navbarDropDown,
        (location.pathname === '/page31' ||
          location.pathname === '/page32' ||
          location.pathname === '/page33'
        ) && styles.navbarActive)}>
      <NavDropdown.Item className={cn(
        styles.navbarDropDownItem,
        location.pathname === '/page31' && styles.navbarDropDownItemActive
      )}>
        <NavLink to='/page31' >
          Page31
        </NavLink>
      </NavDropdown.Item>
      <NavDropdown.Item className={cn(
        styles.navbarDropDownItem,
        location.pathname === '/page32' && styles.navbarDropDownItemActive
      )}>
        <NavLink to='/page32'>
          Page32
        </NavLink></NavDropdown.Item>
      <NavDropdown.Item className={cn(
        styles.navbarDropDownItem,
        location.pathname === '/page33' && styles.navbarDropDownItemActive
      )}>
        <NavLink to='/page33'>
          Page33
        </NavLink></NavDropdown.Item>
    </NavDropdown>
  )
}