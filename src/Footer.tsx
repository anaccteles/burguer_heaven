export function Footer() {
  return (
    <div className="bg-[#B3A0CD] max h-[320px] rounded-[15px] p-10 mt-12 mb-[50px]">
      <div className="flex justify-between ml-[100px] mr-[100px] mt-[40px]">
        <h1 className="text-[30px] leading-none">
          BURGER <br /> HEAVEN
        </h1>

        <div className="h1-inter font-semibold text-[#1E1E1E] text-[18px] flex flex-col">
          <p className="font-['Bowlby_One',sans-serif]">MORE</p>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Locations</a>
          <a href="">Privacy</a>
        </div>

        <div className="h1-inter font-semibold text-[#1E1E1E] text-[18px] flex flex-col">
          <p className="font-['Bowlby_One',sans-serif]">HOURS</p>
          <a href="">Open from</a>
          <a href="">11AM to</a>
          <a href="">11PM daily</a>
        </div>

        <div>
          <p>JOIN OUR NEWSLETTER</p>
          <input
            type="email"
            name="email"
            id="email"
            className="px-20 py-3 border border-black-300 rounded-md mt-[20px]"
          />

          <button type="submit" className="ml-[-100px] text-[18px]">
            SUBMIT
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-[50px] ml-[100px] mr-[100px]">
        <p className="h1-inter font-semibold text-[#1E1E1E] text-[14px] ">
          Copyright Burger Heaven
        </p>
        <p className="h1-inter font-semibold text-[#1E1E1E] text-[14px]">
          Privacy Policy
        </p>
      </div>
    </div>
  );
}
