interface ISectionDetach {
  img: string;
  text: string;
  textcolor: string;
  imgClassName?: string;
}

export function SectionDetach({
  img,
  text,
  textcolor,
  imgClassName,
}: ISectionDetach) {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1
        className={`text-[${textcolor}] text-center max-w-[1255px] text-[107.09px] leading-none`}
      >
        {text}
      </h1>
      <img src={img} alt="Burger" className={imgClassName} />
    </div>
  );
}
