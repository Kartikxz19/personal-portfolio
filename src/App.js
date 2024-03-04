
import { Navbartop } from './components/Navbartop';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import {Easycontact} from './components/Easycontact';
//always import your css afterwards so that you can override bootstrap's inbuilt css.
import './App.css';

import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbartop/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Easycontact/>
      <Footer/>
    </div>
  );
}

export default App;
