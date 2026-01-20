import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from "@/components/ui/widget";

export default function WidgetDemo() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  const rawHours = time.getHours();       // 0–23
  const hours = rawHours % 12 || 12;      // 1–12
  const minutes = format(time.getMinutes());
  const seconds = format(time.getSeconds());

  return (
    <Widget className="relative p-0 m-0 h-[50px] bg-transparent text-orange shadow-none">
      <WidgetContent className="flex-col gap-4">
        <WidgetTitle className="text-7xl font-poppins font-bold tracking-widest">
          {hours}:{minutes}:{seconds}
        </WidgetTitle>
      </WidgetContent>
    </Widget>
  );
}
