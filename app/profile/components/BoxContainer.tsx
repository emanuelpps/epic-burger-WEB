import { PrimaryTitle } from "@/app/components/titles/PrimaryTitle";

interface BoxContainerProps {
  text: string;
  type: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  text,
  type,
  children,
}) => {
  return (
    <div className="flex w-[100%] justify-center items-center mt-20">
      <div className="bg-[#F23F39] w-[50%] flex flex-col p-10 rounded-lg">
        <div className="flex">
          <PrimaryTitle text={text} type={type} />
        </div>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default BoxContainer;
