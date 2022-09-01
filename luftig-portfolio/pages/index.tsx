import type { NextPage } from 'next';
import IconFooter from '../components/IconFooter';
import Navbar from '../components/Navbar';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Introduction from '../components/sections/Introduction';
import styles from '../styles/Home.module.css';




const Home: NextPage = () => {


  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <Introduction />
        <About />
        <Experience />
      </div>
      <IconFooter />
    </>
  )
}

export default Home
