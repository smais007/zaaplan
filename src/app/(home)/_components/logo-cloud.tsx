import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

import Clearbit from "../../../../public/logos/clearbit.png";
import Front from "../../../../public/logos/front.png";
import Hubspot from "../../../../public/logos/hubspot.png";
import Integromat from "../../../../public/logos/integromat.png";
import Mixpanel from "../../../../public/logos/mixpanel.png";
import Parabola from "../../../../public/logos/parabola.png";
import Spread from "../../../../public/logos/spread.png";
import Surveymonkey from "../../../../public/logos/surveymonkey.png";
import Voiceflow from "../../../../public/logos/voiceflow.png";

const logos = [
  {
    name: "Jack",
    img: Hubspot,
  },
  {
    name: "Jill",
    img: Clearbit,
  },
  {
    name: "John",
    img: Front,
  },
  {
    name: "Jane",
    img: Integromat,
  },
  {
    name: "Jenny",
    img: Mixpanel,
  },
  {
    name: "James",
    img: Parabola,
  },

  {
    name: "James",
    img: Spread,
  },
  {
    name: "James",
    img: Surveymonkey,
  },
  {
    name: "James",
    img: Voiceflow,
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
