import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/site";

export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="accordion-list">
      {items.map((item) => (
        <details className="accordion-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <ChevronDown aria-hidden="true" className="accordion-chevron" size={20} />
          </summary>
          <div className="accordion-content"><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  );
}
