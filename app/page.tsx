import EpicBurgerLogo from "@/public/assets/images/burger-logo.png";
import Image from "next/image";
import { PrimaryButton } from "./components/buttons/PrimaryButton";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-primary flex flex-col w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex justify-center items-center">
          <Image src={EpicBurgerLogo} alt="Epic Burger Logo" width={400} />
        </div>
        <div>
          <Link href={"/homepage"}>
            <PrimaryButton label="Pedi tu Hambruguesa" />
          </Link>
        </div>
      </div>
    </div>
  );
}
