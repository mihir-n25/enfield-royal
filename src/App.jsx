import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/IPhone';
import Navbar from './components/Navbar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Loader from './components/Loader';


const App = () => {
  return (
    <main className="bg-black">
      <Loader/>
      <div className='transition-all duration-1000 '>
      <Navbar />
      <Hero/>
      <Highlights/>
      <Features />
      <HowItWorks />
      <Footer />
      </div>
    </main>
  )
}

export default App;

