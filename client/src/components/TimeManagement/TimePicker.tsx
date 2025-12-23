import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const TimePicker = () => {
  const [hours, setHours] = useState(15);
  const [minutes, setMinutes] = useState(3);

  const incrementHours = () => {
    setHours((prev) => (prev + 1) % 24);
  };

  const decrementHours = () => {
    setHours((prev) => (prev - 1 + 24) % 24);
  };

  const incrementMinutes = () => {
    setMinutes((prev) => (prev + 1) % 60);
  };

  const decrementMinutes = () => {
    setMinutes((prev) => (prev - 1 + 60) % 60);
  };

  const resetTime = () => {
    const now = new Date();
    setHours(now.getHours());
    setMinutes(now.getMinutes());
  };

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-card shadow-soft rounded-2xl p-8">
        <div className="flex items-center gap-6">
          {/* Hours Column */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Hours
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={incrementHours}
              className="arrow-button rounded-lg w-12 h-10 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronUp className="w-5 h-5" />
            </Button>

            <div className="time-display rounded-xl w-20 h-24 flex items-center justify-center border border-border shadow-sm">
              <span className="text-5xl font-semibold tabular-nums">
                {formatNumber(hours)}
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={decrementHours}
              className="arrow-button rounded-lg w-12 h-10 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>

          {/* Separator */}
          <div className="flex items-center h-full pb-8">
            <span className="text-4xl font-bold text-muted-foreground">:</span>
          </div>

          {/* Minutes Column */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Minutes
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={incrementMinutes}
              className="arrow-button rounded-lg w-12 h-10 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronUp className="w-5 h-5" />
            </Button>

            <div className="time-display rounded-xl w-20 h-24 flex items-center justify-center border border-border shadow-sm">
              <span className="text-5xl font-semibold tabular-nums">
                {formatNumber(minutes)}
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={decrementMinutes}
              className="arrow-button rounded-lg w-12 h-10 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={resetTime}
          variant="outline"
          className="rounded-lg hover:bg-secondary transition-colors"
        >
          Current Time
        </Button>
        <Button
          onClick={() => {
            console.log(`Selected time: ${formatNumber(hours)}:${formatNumber(minutes)}`);
          }}
          className="rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          Set Time
        </Button>
      </div>
    </div>
  );
};
