export function NavBar() {
  return (
    <nav className="pt-12 pl-12 pr-12 mb-25">
      <ul className="flex items-center justify-between">
        <li className="text-[#E9E3DC] text-[30px]">
          <a href="#">BURGUER HEAVEN</a>
        </li>
        <li className="text-[#E9E3DC] text-[18px] flex justify-between w-110 items-center">
          <a href="#">ABOUT</a>
          <a href="#">MENU</a>
          <button className="bg-[#B3A0CD] h-[60px] w-[203px] text-[#1E1E1E]">
            ORDER ONLINE
          </button>
        </li>
      </ul>
    </nav>
  );
}
