"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  const faqItems = [
    {
      question: "How do you add protein to potato chips?",
      answer:
        "We've developed a proprietary process that infuses whey protein into our potato chips during manufacturing. This process ensures the protein is evenly distributed throughout the chip while maintaining the delicious taste and crunch you expect from premium potato chips.",
    },
    {
      question: "Are CrunchFuel chips suitable for vegetarians?",
      answer:
        "Yes, our CrunchFuel chips are suitable for vegetarians as we use whey protein, which is derived from milk. However, they are not suitable for vegans due to the dairy content.",
    },
    {
      question: "How much protein is in each serving?",
      answer:
        "Our CrunchFuel chips contain 10% protein by weight. This means a 100g bag contains 10g of protein, a 50g bag contains 5g of protein, and a 30g bag contains 3g of protein.",
    },
    {
      question: "Are CrunchFuel chips gluten-free?",
      answer:
        "Yes, all our CrunchFuel flavors are gluten-free. They are produced in a facility that maintains strict protocols to prevent cross-contamination with gluten-containing products.",
    },
    {
      question: "Can I include CrunchFuel in my fitness diet?",
      answer:
        "CrunchFuel can be a great addition to a balanced fitness diet when you're looking for a snack that offers more protein than traditional chips. They're perfect for post-workout recovery or as a protein-boosting snack between meals. However, as with any snack, they should be enjoyed as part of a varied and balanced diet.",
    },
    {
      question: "Where are CrunchFuel chips manufactured?",
      answer:
        "Our CrunchFuel chips are manufactured in our dedicated facility using locally sourced potatoes whenever possible. Our manufacturing process adheres to the highest food safety and quality standards.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-[#0D0D0D]">{item.question}</AccordionTrigger>
          <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

