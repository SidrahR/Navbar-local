import Collection from "@/components/views/home/collection";
import HeroSection from "@/components/views/home/hero";
import MoreWays from "@/components/views/home/moreways";
import SimpleSlider from "@/components/views/home/slider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SimpleSlider />
      {/* sajid collection section 5 */}
      <div className="flex flex-col  overflow-hidden">
        <Collection />
      </div>
      <MoreWays />
    </main>
  );
}
