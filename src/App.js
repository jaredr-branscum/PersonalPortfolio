import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
  <div>
  <Header></Header>
  <Hero></Hero>
  <main id="main">
    <About></About>
	<Skills></Skills>
	<Resume></Resume>
	<Portfolio></Portfolio>
	<Services></Services>
    <Testimonials></Testimonials>
	<Contact></Contact>
  </main>
  <Footer></Footer>
  <a href="#hero" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  </div>
  );
}

export default App;