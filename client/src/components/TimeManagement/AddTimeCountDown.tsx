import { CircleAlertIcon, Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TimePicker } from "./TimePicker";

export default function AddTimeCountDown() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="h-[50px] p-0" asChild>
            <Button type="button" className="bg-black rounded-full px-8  py-3  cursor-pointer" ><Plus className="text-white text-9xl font-[800]" /></Button>       
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-center flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
          <TimePicker />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
