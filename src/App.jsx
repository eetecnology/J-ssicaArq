import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import Budget from './components/Budget';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Summary from './components/Summary';
import Rodape from './components/Rodape';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutMe />
      <Summary />
      <Portfolio />
      <Budget />
      <Contact />
      <Rodape />
    </div>
  )
}
