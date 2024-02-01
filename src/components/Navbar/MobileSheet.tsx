import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { MobileAccordion } from "./MobileAccordion";
import CustomButtonOne from "../CustomButtonOne";
import CustomButtonTwo from "../CustomButtonTwo";

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify color="gray" />
      </SheetTrigger>
      <SheetContent>
        <div className="py-4">
          <MobileAccordion />
        </div>
        <div className="flex flex-col w-full gap-4">
          <CustomButtonOne />
          <CustomButtonTwo title="Log In" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
