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
        <div className="pr-12 pl-12">
          <SectionDetach />
          <Promotioncard />
          <div className="flex justify-between">
            <Cardorder text="SALT & VINEGAR FRENCH FRIES" img={batata} />
            <Cardorder text="CRISPY CHICKEN SANDWICH" img={hamburguers} />
          </div>
          <h1 className="text-[#D1EF53] text-center max-w-[1255px] text-[107.09px] leading-none mt-12">
            "THE BEST BURGUER I'VE EVER HAD"
          </h1>
          <h1 className="text-[#E9E3DC] text-center max-w-[1255px] text-[70px] leading-none mt-12">
            ORDER ONLINE OR COME VISIT US TODAY
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
