import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/ui/sparkles-text";
import { HeroVideoDialogDemo } from "./hero-video-dialog";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// const steps = [
//   {
//     index: "1",
//     title: "Create an account using Google or Github",
//   },
//   {
//     index: "2",
//     title: "Create new workspace",
//   },
//   {
//     index: "1",
//     title: "Add  projects in your workspace ",
//   },
// ];

// const Steps = () => {
//   return (
//     <div className="flex justify-center gap-x-8 w-xl">
//       {steps.map((step) => (
//         <div key={step.index}>
//           <div className="bg-red-300">
//             <p>{step.index}</p> <p>{step.title}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export const Hero = () => {
  return (
    <section>
      <div className="z-10 flex mt-32 min-h-20 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <Link href="/workspaces/673ba1d200158e625ca8/join/u0L2nJ">
              📣 Join this workspace for better experience and onboarding
              process
            </Link>

            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <div className="text-center   sm:mt-20 md:mt-0">
        <SparklesText
          text=" Collaboration Made Simple, Success Made Inevitable"
          className="text-xl md:text-5xl max-w-2xl mx-auto"
          sparklesCount={10}
        />
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-snug"></h1>
        <p className="text-lg text-muted-foreground mt-4 mx-auto max-w-3xl">
          From initial brainstorming to final delivery,
          <strong>AstroCollab</strong>
          keeps your projects on track with intuitive boards, powerful tracking
          tools, and seamless integrations—ensuring your team stays aligned and
          productive every step of the way.
        </p>
        <Button className="rounded-full mt-4">Get Started</Button>
      </div>
      <div className="my-10 md:my-20">
        <HeroVideoDialogDemo />
      </div>
    </section>
  );
};
