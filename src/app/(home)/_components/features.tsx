import { cn } from "@/lib/utils";
import { de } from "date-fns/locale";
import {
  Bot,
  CloudDrizzle,
  DollarSign,
  DraftingCompass,
  File,
  LucideCircleHelp,
  MessagesSquare,
  Spline,
  Terminal,
  Video,
} from "lucide-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI Assistant",
      description:
        "Our AI assistant is a powerful tool that can help you with any task.",
      icon: <Bot />,
      upcomming: true,
    },
    {
      title: "Built in Video Chat",
      description:
        "Our Video Chat feature allows you to connect with a team member no need to go to other places.",
      icon: <Video />,
      upcomming: true,
    },
    {
      title: "Built in Chat",
      description:
        "Our Chat feature allows you to connect with a team member no need to go to other places.",
      icon: <MessagesSquare />,
      upcomming: true,
    },
    {
      title: "Whiteboard",
      description:
        "You can draw and make diagrams with anything you want on our whiteboard.",
      icon: <DraftingCompass />,
      upcomming: false,
    },
    {
      title: "Documents",
      description:
        "Documents that can be edited and shared with anyone and support markdown.",
      icon: <File />,
      upcomming: true,
    },
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <Terminal />,
      upcomming: false,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <Spline />,
      upcomming: false,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <DollarSign />,
      upcomming: false,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-xl  md:text-3xl font-semibold">
          Everything
          <span className=" text-black">AstroCollab</span>
          Offers for
          <br className="sm:hidden md:block" /> Seamless Team Collaboration
        </h1>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          AstroCollab brings together powerful tools to keep your team
          connected, productive, and focused on what matters. It simplifies your
          workflow by providing everything your team needs—all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  upcomming,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  upcomming: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative flex items-center justify-between z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
        {upcomming === true && (
          <div className="">
            <p className="text-xs bg-muted text-black px-2 py-0.5 rounded-full">
              Upcoming
            </p>
          </div>
        )}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-neutral-900 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
