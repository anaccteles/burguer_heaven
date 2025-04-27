import { NavBar } from './NavBar';
import { SectionDetach } from './SectionDetach';
import { Promotioncard } from './Promotioncard';
import { Cardorder } from './Cardorder';
import batata from './assets/batata.png';
import hamburguers from './assets/hamburguers.png';

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="container">
          <SectionDetach />
          <Promotioncard />
          <div className="flex">
            <Cardorder text="SALT & VINEGAR FRENCH FRIES" img={batata} />
            <Cardorder text="CRISPY CHICKEN SANDWICH" img={hamburguers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
