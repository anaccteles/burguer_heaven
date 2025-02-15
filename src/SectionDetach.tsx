import burgers from './assets/burgers.png';
export function SectionDetach() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-[#E9E3DC] text-center max-w-[1255px] text-[107.09px] leading-none">
        NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT
      </h1>
      <img src={burgers} alt="Burger" className="h-[478px] mt-[-45px]" />
    </div>
  );
}
