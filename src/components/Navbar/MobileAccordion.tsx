import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Feaatures</AccordionTrigger>
        <AccordionContent>
          Built to support any team and workflow
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Solutions</AccordionTrigger>
        <AccordionContent>
          Discover best practices, watch webinars, get insights.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Resources</AccordionTrigger>
        <AccordionContent>
          Get more information on our nonprofit discount program and apply.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Enterprise</AccordionTrigger>
        <AccordionContent>
          Gets lots of tips, tricks and advice to get the most from Asnet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Pricing</AccordionTrigger>
        <AccordionContent>
          Learn more about building applications on the Asnet platform.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
