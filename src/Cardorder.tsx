interface ICardorder {
  img: string;
  text: string;
}

export function Cardorder({ img, text }: ICardorder) {
  return (
    <div
      className="h-[753px] w-[650px] mt-[60px] flex items-end bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-[#1E1E1E] w-[386px] h-[185px] rounded-[30px] p-[40px] mb-[30px] ml-[30px]">
        <h1 className="text-[30px] text-[#E9E3DC] leading-[30px]">{text}</h1>
        <a href="##" className="text-[20px] text-[#B3A0CD] leading-[50px]">
          ORDER ONLINE
        </a>
      </div>
    </div>
  );
}
