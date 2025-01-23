interface TitleProps {
  text: string;
}

export const PrimaryTitle: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-[3rem] font-[700] text-[#F23F39]">{text}</h1>;
};
