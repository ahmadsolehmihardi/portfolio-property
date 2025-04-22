import './index.css';
import './App.css';
import Header from './component/header/header';
import Hero from './component/hero/hero';
import Companies from './component/companies/companies';
import Resident from './component/resident/resident';
import Value from"./component/value/value";
import Contact from './component/contact/contact';
import GetStart from'./component/getStart/getStart';
import Foother from './component/foother/foother';


function App() {
  return (
    <div className='app'>
      <div>
        <div className='white-grediant'/>
      <Header/>
      <Hero/>
    </div>
    <Companies/>
    <Resident/>
    <Value/>
    <Contact/>
    <GetStart/>
    <Foother/>
    </div>

  );
}

export default App;
