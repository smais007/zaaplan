import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/ui/sparkles-text";
import { HeroVideoDialogDemo } from "./hero-video-dialog";

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
      <div className="text-center pt-24  md:pt-40">
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
