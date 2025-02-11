interface TitleProps {
  text: string;
  type: "primary" | "secondary" | "tertiary";
}

const titleStyles = {
  primary: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#F23F39",
  },
  secondary: {
    fontSize: "2.5rem",
    fontWeight: 600,
    color: "#F23F39",
  },
  tertiary: {
    fontSize: "2rem",
    fontWeight: 500,
    color: "#FFFBF2",
  },
};

export const PrimaryTitle: React.FC<TitleProps> = ({ text, type }) => {
  const style = titleStyles[type];
  return <h1 style={style}>{text}</h1>;
};
