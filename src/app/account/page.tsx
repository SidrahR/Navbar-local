import Image from "next/image";
import account_main from "../../components/assets/images/account/account_main.jpg";
import Login from "@/components/views/account/login";
import Members from "@/components/views/account/members";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      {/* Image with Heading */}
      <div className="h-[70vh] relative w-screen lg:h-[85vh]">
        {/* Image*/}
        <div className="relative w-full h-full">
          <Image
            src={account_main}
            fill
            alt="about us"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/20"></div>

        {/* Text on Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center text-center text-white px-10 md:px-0">
            <h4 className="mt-10 text-xs md:text-sm">MY ACCOUNT</h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl mt-3 mb-6">
              Good to see you again
            </h1>
            <h2 className="text-base md:text-xl">
              Please log in to your account
            </h2>
          </div>
        </div>
      </div>

      {/* Login Component */}
      <Login />

      {/* Members Component */}
      <Members />
    </div>
  );
}
