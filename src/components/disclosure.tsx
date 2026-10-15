"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

interface DisclosureProps {
  children: React.ReactNode;
  label?: string;
  closeLabel?: string;
  context?: string;
}

export default function Disclosure({
  children,
  label = "View contributions",
  closeLabel = "Hide contributions",
  context,
}: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const buttonLabel = open ? closeLabel : label;

  return (
    <div className="disclosure">
      <button
        type="button"
        className="text-button"
        aria-label={context ? `${buttonLabel}: ${context}` : undefined}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(value => !value)}
      >
        {buttonLabel}
        <ChevronDown size={16} className={open ? "rotate-180" : ""} aria-hidden="true" />
      </button>
      <div id={id} hidden={!open} className="disclosure-content">{children}</div>
    </div>
  );
}
