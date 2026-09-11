import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

interface AccordionProps {
  title: string;
  content: string;
  id?: string;
  prefix?: string;
}

export function Accordion({ title, content, id, prefix }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl mb-4 overflow-hidden bg-surface shadow-sm" id={id}>
      <button
        className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-surface hover:bg-primary-light/30 active:bg-primary-light/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-text md:text-lg pr-4 flex items-start sm:items-center gap-3 sm:gap-4">
          {prefix && (
            <span className="text-xl font-bold text-primary opacity-60 w-8 shrink-0">{prefix}</span>
          )}
          <span>{title}</span>
        </h3>
        <ChevronDown
          className={"w-6 h-6 text-text-muted shrink-0 transition-transform duration-200 " + (isOpen ? "transform rotate-180" : "")}
        />
      </button>
      
      {isOpen && (
        <div className="p-4 md:p-5 border-t border-border bg-surface text-text-muted">
          <div className="markdown-body text-base">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
