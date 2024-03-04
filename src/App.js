
import { Navbartop } from './components/Navbartop';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
//always import your css afterwards so that you can override bootstrap's inbuilt css.
import './App.css';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbartop/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
