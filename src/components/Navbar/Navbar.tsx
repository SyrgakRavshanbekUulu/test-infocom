import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'
import { NavDropDown } from './NavDropDown'

import styles from './Navbar.module.css'

export const Header = (): JSX.Element => {
  const location = useLocation()

  return (
    <Navbar bg="light" >
      <Container>
        <Nav className={styles.navbarContainer}>
          <NavLink
            to='/page1'
            className={cn(location.pathname === '/page1' && styles.active)}
          >
            Page1
          </NavLink>

          <NavLink
            to='/page2'
            className={cn(location.pathname === '/page2' && styles.active)}
          >
            Page2
          </NavLink>

          <NavDropDown />

          <NavLink
            to='/page4'
            className={cn(location.pathname === '/page4' && styles.active)}
          >
            Page4
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}