import { differenceInDays, format } from "date-fns";
import { cn } from "@/lib/utils";

interface TaskDateProps {
  value: string;
  className?: string;
}

export const TaskDate = ({ value, className }: TaskDateProps) => {
  const today = new Date();
  const endDate = new Date(value);
  const diffInDate = differenceInDays(endDate, today);

  let textColor = "text-muted-foreground";

  if (diffInDate <= 3) {
    textColor = "text-red-500";
  } else if (diffInDate <= 7) {
    textColor = "text-orange-500";
  } else if (diffInDate <= 14) {
    textColor = "text-yellow-500";
  }

  return (
    <div className={textColor}>
      <span className={cn("truncate", className)}>
        {format(new Date(value), "PPP")}
      </span>
    </div>
  );
};
