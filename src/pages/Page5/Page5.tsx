import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './Page5.module.css'

export const Page5 = (): JSX.Element => {
  return (
    <Container className={styles.container}>
      <NavLink to='/page1'>
        <h1>Page1</h1>
      </NavLink>
    </Container>
  )
}