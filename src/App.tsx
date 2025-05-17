import { NavBar } from './NavBar';
import { SectionDetach } from './SectionDetach';
import { Promotioncard } from './Promotioncard';
import { Cardorder } from './Cardorder';
import { Footer } from './Footer';
import batata from './assets/batata.png';
import hamburguers from './assets/hamburguers.png';
import burgers from './assets/burgers.png';
import pessoas from './assets/pessoas.png';

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="pr-12 pl-12">
          <SectionDetach
            text="NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT"
            img={burgers}
            textcolor="#E9E3DC"
            imgClassName="h-[478px] mt-[-45px]"
          />
          <Promotioncard />
          <div className="flex justify-between mb-[30px]">
            <Cardorder text="SALT & VINEGAR FRENCH FRIES" img={batata} />
            <Cardorder text="CRISPY CHICKEN SANDWICH" img={hamburguers} />
          </div>

          <SectionDetach
            text="THE BEST BURGUER I'VE EVER HAD"
            img={pessoas}
            textcolor="#D1EF53"
            imgClassName="mt-[30px]"
          />

          <h1 className="text-[#E9E3DC] text-center max-w-[1255px] text-[70px] leading-none mt-12">
            ORDER ONLINE OR COME VISIT US TODAY
          </h1>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
