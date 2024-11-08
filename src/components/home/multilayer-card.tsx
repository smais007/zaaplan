import { Flag, Handshake, Target } from "lucide-react"; // Import Lucide icons
import { cn } from "@/lib/utils";

const cardContent = [
  {
    title: "Our Mission",
    description:
      "AstroCollab is dedicated to solving the complex challenges of team collaboration and communication.  With AstroCollab, we aim to make remote and in-office collaboration feel natural, intuitive, and deeply connected.",
    icon: <Flag />,
  },
  {
    title: "Our Values",
    description:
      "We are committed to collaboration, transparency, efficiency, adaptability, and respect. We strive to empower teams to achieve their best by building tools that foster open communication and consistent improvement every day.",
    icon: <Handshake />,
  },
  {
    title: "Our Goals",
    description:
      "We aim to make collaboration accessible and effective for teams everywhere. By creating a user-friendly and powerful platform, we believe we can help teams stay connected and productive, enabling them to make a real impact.",
    icon: <Target />,
  },
];

type CardBodyProps = {
  className?: string;
  title: string;
  description: string;
  icon: JSX.Element;
};
const CardBody = ({
  className = "",
  title,
  description,
  icon,
}: CardBodyProps) => (
  <div className={cn(className, "flex flex-col justify-between")}>
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 ml-2">
        {title}
      </h3>
    </div>
    <p className="text-gray-700 dark:text-gray-400">{description}</p>
  </div>
);

// MultilayerCardV_1 component
type CardProps = {
  children?: React.ReactNode;
};
export const MultilayerCardV_1 = ({ children }: CardProps) => (
  <div className="py-5">
    <div className="relative w-full">
      <div className="absolute scale-x-95 inset-0 -rotate-[5deg] rounded-lg bg-gray-200 dark:bg-zinc-800 py-10" />
      {children}
    </div>
  </div>
);

// Usage of cards
export const CardSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 ">
    {cardContent.map((content, index) => (
      <MultilayerCardV_1 key={index}>
        <CardBody
          className="px-6 py-10 relative mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl"
          title={content.title}
          description={content.description}
          icon={content.icon}
        />
      </MultilayerCardV_1>
    ))}
  </div>
);
