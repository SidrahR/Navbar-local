import Image from "next/image";
import about_image from "../../components/assets/images/aboutus/about-image.jpg";

export default function page() {
  return (
    <div className="overflow-x-hidden bg-stone-100">
      {/* Image with Heading */}
      <div className="h-[50vh] relative w-screen lg:h-[80vh]">
        {/* Image*/}
        <div className="relative w-full h-full">
          <Image
            src={about_image}
            fill
            alt="about us"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/30"></div>

        {/* Heading */}
        <div className="absolute inset-0 flex items-center justify-center  z-10">
          <div className="flex flex-col items-center">
            <h1 className="font-normal text-3xl md:text-6xl text-stone-100">
              About Us
            </h1>
            {/* Underline */}
            <div className="w-8 md:w-16 h-[2px] md:h-[4px] lg:h-[3px] bg-stone-100 mt-3 md:mt-5 "></div>
          </div>
        </div>
      </div>

      {/* Paragraph div */}
      <div
        className="mx-auto px-10 lg:px-0 max-w-4xl text-lg text-gray-700 my-10
        flex flex-col space-y-8 "
      >
        <p>
          It started off as a small idea between four friends one day, when we
          realised there was a gap in the market that no one else seemed to be
          filling. When you see an opportunity like that, you have three
          choices.
        </p>

        <div>
          <li>
            Have a conversation about why no one has filled it and hope someone
            does one day.
          </li>
          <li>
            Have a conversation about how maybe you should all fill it one day -
            and then do something else.
          </li>
          <li>Stop doing what you&apos;re doing and fill that gap!</li>
        </div>

        <p>
          Needless to say, we chose option 3 and have never looked back. We run
          our business from a small but gorgeous space, based just outside
          London. We are extremely focused on customer satisfaction and we only
          use the finest and strongest materials, all of which are ethically
          sourced. We pride ourselves on how tough our products are, the quality
          being second to none. Having some fantastic collaborators who have
          helped us reach a point in our extraordinary journey has enabled our
          brand to grow, reflecting everything that we feel is important in the
          lives that we lead.
        </p>
        <p>
          We hope you enjoy browsing through our range of products. If you have
          any questions, please don&apos;t hesitate to contact us.
        </p>
      </div>
    </div>
  );
}
