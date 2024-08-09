import AboutMe from './components/AboutMe';
import Banner from './components/Banner';
import Budget from './components/Budget';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Summary from './components/Summary';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutMe />
      <Summary />
      <Portfolio />
      <Budget />
    </div>
  )
}
