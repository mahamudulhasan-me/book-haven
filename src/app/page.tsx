import Image from "next/image";
import Link from "next/link";
import { HiBookOpen, HiMiniSquare3Stack3D } from "react-icons/hi2";
const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Image
        src="/images/home/book-bg.png"
        fill
        sizes="100vw"
        className="object-cover blur-sm"
        alt="Background image"
      />
      <div className="z-10 bg-violet-100 w-2/4 h-1/4  text-violet-800 flex flex-col justify-center items-center rounded-md">
        <h1 className="text-xl font-semibold flex items-center">
          <HiBookOpen /> Book Haven <HiMiniSquare3Stack3D />
        </h1>
        <Link
          href="/store"
          className="bg-violet-700 text-white p-1 my-5 rounded-sm"
        >
          Take me to The Haven
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
