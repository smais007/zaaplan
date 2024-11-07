import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const logos = [
  {
    name: "Jack",
    img: "/logos/hubspot.png",
  },
  {
    name: "Jill",
    img: "/logos/clearbit.png",
  },
  {
    name: "John",
    img: "/logos/front.png",
  },
  {
    name: "Jane",
    img: "/logos/integromat.png",
  },
  {
    name: "Jenny",
    img: "/logos/mixpanel.png",
  },
  {
    name: "James",
    img: "/logos/parabola.png",
  },
  {
    name: "James",
    img: "/logos/spread.png",
  },
  {
    name: "James",
    img: "/logos/surveymonkey.png",
  },
  {
    name: "James",
    img: "/logos/voiceflow.png",
  },
];

export function LogoCloud() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden ">
      <div>
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 ">
          Trusted by the world’s most innovative teams
        </h2>
      </div>
      <Marquee pauseOnHover className="[--duration:40s] ">
        {logos.map((logo) => (
          <div key={logo.name} className=" flex items-center gap-x-20">
            <Image
              src={logo.img}
              alt={logo.name}
              width={100}
              height={30}
              className="h-10 w-full px-4"
            />
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
