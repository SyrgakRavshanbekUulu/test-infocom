import { Header } from 'components/Navbar/Navbar';
import { useEffect } from 'react';
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import styles from './Page1.module.css'

export const Page1 = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
    }, 1000);

    return () => clearInterval(interval);
  }, [counter])

  return (
    <div>
      <Header />
      <Container className={styles.container}>
        <h1>Counter: {counter}</h1>
      </Container>
    </div>
  )
}