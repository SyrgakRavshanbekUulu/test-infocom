import { Container } from 'react-bootstrap'
import { Header } from '../Navbar/Navbar'
import { PageProps } from './Page.types'
import styles from './Page.module.css'

export const Page = ({
  text,
  withHeader = false,
}: PageProps): JSX.Element => {
  return (
    <>
      {withHeader && <Header />}
      <Container className={styles.container}>
        <h1>
          {text}
        </h1>
      </Container>
    </>
  )
}