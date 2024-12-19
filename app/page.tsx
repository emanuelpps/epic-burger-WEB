import EpicBurgerLogo from "@/public/assets/images/burger-logo.png";
import Image from "next/image";
import { PrimaryButton } from "./components/buttons/PrimaryButton";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-primary">
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex items-center justify-center">
          <Image src={EpicBurgerLogo} alt="Epic Burger Logo" width={400} />
        </div>
        <div>
          <Link href={"/burgers"}>
            <PrimaryButton label="Pedi tu Hambruguesa" />
          </Link>
        </div>
      </div>
    </div>
  );
}
