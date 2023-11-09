import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import Hero from './componets/UI/Hero';
import Services from './componets/UI/Services';
import Portfolio from './componets/UI/Portfolio';
import Contact from './componets/UI/Contact';
function App() {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
      <Header/>
      <main>
        <Hero></Hero>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
