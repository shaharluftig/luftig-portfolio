import type { NextPage } from 'next';
import IconLinks from '../components/IconsLinks';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
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
        <Contact />
        <Footer />
      </div>
      <IconLinks />
    </>
  )
}

export default Home
