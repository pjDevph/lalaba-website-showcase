"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Tutorial } from "@/types/site";
import { SiteIcon } from "@/components/ui/FeatureCard";

export function TutorialStepper({ tutorial }: { tutorial: Tutorial }) {
  const [stepIndex, setStepIndex] = useState(0);
  const step = tutorial.steps[stepIndex];

  return (
    <div className="tutorial-stepper">
      <div className="tutorial-step-list" aria-label={`${tutorial.label} tutorial steps`}>
        {tutorial.steps.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === stepIndex ? "tutorial-step-button tutorial-step-button-active" : "tutorial-step-button"}
            onClick={() => setStepIndex(index)}
            aria-current={index === stepIndex ? "step" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>

      <div className="tutorial-detail" aria-live="polite">
        <div className="tutorial-visual">
          {step.visualAsset ? (
            <Image
              src={step.visualAsset}
              alt={step.visualAlt ?? step.visualLabel}
              fill
              sizes="(min-width: 1024px) 52vw, (min-width: 640px) 60vw, 90vw"
              className="tutorial-visual-image"
            />
          ) : (
            <>
              <span className="tutorial-visual-icon" aria-hidden="true"><SiteIcon name={step.icon} size={34} /></span>
              <span>{step.visualLabel}</span>
            </>
          )}
        </div>
        <div className="tutorial-detail-copy">
          <p className="tutorial-counter">Step {stepIndex + 1} of {tutorial.steps.length}</p>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
        <div className="tutorial-nav">
          <button
            type="button"
            className="tutorial-nav-button"
            onClick={() => setStepIndex((value) => Math.max(0, value - 1))}
            disabled={stepIndex === 0}
          >
            <ArrowLeft aria-hidden="true" size={18} /> Previous
          </button>
          <button
            type="button"
            className="tutorial-nav-button tutorial-nav-button-next"
            onClick={() => setStepIndex((value) => Math.min(tutorial.steps.length - 1, value + 1))}
            disabled={stepIndex === tutorial.steps.length - 1}
          >
            Next <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
