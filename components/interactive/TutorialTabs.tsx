"use client";

import { useRef, useState } from "react";
import { tutorials } from "@/content/tutorials";
import { TutorialStepper } from "@/components/interactive/TutorialStepper";

export function TutorialTabs() {
  const [activeId, setActiveId] = useState(tutorials[0].id);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = tutorials.find((item) => item.id === activeId) ?? tutorials[0];

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tutorials.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tutorials.length) % tutorials.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tutorials.length - 1;

    setActiveId(tutorials[nextIndex].id);
    refs.current[nextIndex]?.focus();
  };

  return (
    <div>
      <div className="tab-scroll" role="tablist" aria-label="Getting started tutorials">
        {tutorials.map((tutorial, index) => (
          <button
            key={tutorial.id}
            ref={(node) => { refs.current[index] = node; }}
            id={`tutorial-tab-${tutorial.id}`}
            role="tab"
            type="button"
            aria-selected={tutorial.id === active.id}
            aria-controls={`tutorial-panel-${tutorial.id}`}
            tabIndex={tutorial.id === active.id ? 0 : -1}
            className="tab-button"
            onClick={() => setActiveId(tutorial.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {tutorial.label}
          </button>
        ))}
      </div>

      <div id={`tutorial-panel-${active.id}`} role="tabpanel" aria-labelledby={`tutorial-tab-${active.id}`} className="tutorial-panel">
        <p className="tutorial-summary">{active.summary}</p>
        <TutorialStepper key={active.id} tutorial={active} />
      </div>
    </div>
  );
}
