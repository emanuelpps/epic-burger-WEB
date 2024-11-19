import EpicBurgerLogo from "@/public/assets/images/burger-logo.png";
import Image from "next/image";
import { PrimaryButton } from "./components/buttons/PrimaryButton";
export default function Home() {
  return (
    <div className="bg-primary flex flex-col w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex justify-center items-center">
          <Image src={EpicBurgerLogo} alt="Epic Burger Logo" width={400} />
        </div>
        <div>
          <PrimaryButton label="Pedi tu Hambruguesa" />
        </div>
      </div>
    </div>
  );
}