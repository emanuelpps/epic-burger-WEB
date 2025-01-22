interface TitleProps {
    text: string;
  }
  
  export const PrimaryTitle: React.FC<TitleProps> = ({ text }) => {
    return <h1 className="">{text}</h1>;
  };
  