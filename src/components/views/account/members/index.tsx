import members from "../../../assets/images/account/members.jpg";
import Image from "next/image";

export default function Members() {
  return (
    <div className="py-12 md:py-20 bg-stone-100 flex flex-col md:flex-row">
      {/* Image on Left */}
      <div className="md:basis-1/2 flex items-center justify-center">
        <div className="relative w-[20rem] h-[24rem] lg:w-[28rem] lg:h-[32rem]">
          <Image
            src={members}
            fill
            alt="about us"
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </div>
      </div>

      {/* Text on Right */}
      <div className="md:basis-1/2 flex flex-col items-center justify-center text-gray-800 text-center mt-10 md:mt-0">
        {/* Heading */}
        <div className="text-xl lg:text-3xl w-5/6 md:w-2/3 lg:leading-10">
          Enjoy members-only offers, vouchers and exclusive invitations.
        </div>
        {/* Underline */}
        <div className="w-4 md:w-8 h-[2px] md:h-[4px] lg:h-[3px] bg-gray-800 mt-1 md:mt-2 "></div>
        {/* Text */}
        <div className="text-sm md:text-base lg:text-sm space-y-4 mt-10 px-8 md:px-14 lg:px-0">
          <p>
            View your online orders. Members can also view in-store receipts.
          </p>
          <p>Update your personal details, password & manage payment cards.</p>
          <p>
            View and manage addresses, edit your contact address and add new
            addresses.
          </p>
        </div>
      </div>
    </div>
  );
}
