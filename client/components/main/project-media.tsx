"use client";

import type { Project, ProjectImage } from "@/components/main/project-data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type CarouselControlsProps = {
  active: number;
  images: ProjectImage[];
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

function BrowserChrome() {
  return (
    <div className="flex h-8 items-center gap-1.5 border-b border-gray-200 bg-gray-100 px-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] ring-1 ring-inset ring-black/10" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] ring-1 ring-inset ring-black/10" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840] ring-1 ring-inset ring-black/10" />
      <span className="ml-3 h-4 flex-1 rounded-full bg-white/80" />
    </div>
  );
}

function CarouselControls({
  active,
  images,
  onPrevious,
  onNext,
  onSelect,
}: CarouselControlsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous image"
        className="pointer-events-auto absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        className="pointer-events-auto absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        <ChevronRight size={18} />
      </button>
      <div className="pointer-events-auto absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/50 px-2.5 py-1 text-white backdrop-blur-sm">
        <span className="text-[10px] font-medium tabular-nums">
          {active + 1} / {images.length}
        </span>
        <div className="flex items-center gap-1">
          {images.map((item, index) => (
            <button
              key={`${item.url}-${index}`}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Show ${item.name} image ${index + 1}`}
              aria-current={index === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-4 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <span className="sr-only" aria-live="polite">
          {`Image ${active + 1} of ${images.length}`}
        </span>
      </div>
    </div>
  );
}

export function ProjectImages({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const images = project.images;

  if (images.length === 0) {
    return null;
  }

  const hasMultiple = images.length > 1;
  const isPhone = project.frame === "phone";

  const showPrevious = () => {
    setActive((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActive((current) => (current + 1) % images.length);
  };

  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 30 };

  const getCardMotion = (index: number) => {
    const offset = (index - active + images.length) % images.length;
    const depth = Math.min(offset, 2);

    return {
      x: [0, 8, 16][depth],
      y: [0, 12, 24][depth],
      rotate: [0, 1, 2][depth],
      scale: [1, 0.99, 0.98][depth],
      opacity: offset <= 2 ? 1 : 0,
      zIndex: images.length - depth,
      isVisible: offset <= 2,
    };
  };

  if (isPhone) {
    return (
      <div className="rounded-2xl p-4 sm:p-6">
        <div className="group relative mx-auto w-fit">
          <div className="relative rounded-[2.25rem] border-[6px] border-gray-900 bg-gray-900 shadow-lg">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
              {hasMultiple ? (
                <div className="relative aspect-[720/1508] h-[360px] sm:h-[420px]">
                  {images.map((item, index) => (
                    <motion.img
                      key={`${item.url}-${index}`}
                      src={item.url}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      animate={{
                        opacity: index === active ? 1 : 0,
                        scale: index === active ? 1 : 1.04,
                      }}
                      transition={
                        reduceMotion ? { duration: 0 } : { duration: 0.3 }
                      }
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={images[active].url}
                  alt={images[active].name}
                  className="h-[360px] w-auto sm:h-[420px]"
                />
              )}
            </div>
            {hasMultiple && (
              <CarouselControls
                active={active}
                images={images}
                onPrevious={showPrevious}
                onNext={showNext}
                onSelect={setActive}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-4 sm:p-6">
      <div className="group relative">
        {hasMultiple ? (
          <div className="relative">
            <div className="grid items-start">
              {images.map((item, index) => {
                const card = getCardMotion(index);
                const { zIndex, isVisible, ...motionProps } = card;

                return (
                  <motion.button
                    key={`${item.url}-${index}`}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show ${item.name} image ${index + 1}`}
                    aria-current={index === active}
                    animate={motionProps}
                    transition={spring}
                    style={{
                      zIndex,
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                    tabIndex={isVisible ? 0 : -1}
                    className={`col-start-1 row-start-1 block w-full overflow-hidden rounded-xl border border-gray-300/80 bg-white text-left transition-shadow ${
                      index === active ? "shadow-xl" : "shadow-md"
                    }`}
                  >
                    <BrowserChrome />
                    <img
                      src={item.url}
                      alt={item.name}
                      className="h-auto w-full"
                      draggable={false}
                    />
                  </motion.button>
                );
              })}
            </div>
            <CarouselControls
              active={active}
              images={images}
              onPrevious={showPrevious}
              onNext={showNext}
              onSelect={setActive}
            />
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-xl border border-gray-300/80 bg-white shadow-lg">
            <BrowserChrome />
            <img
              src={images[active].url}
              alt={images[active].name}
              className="h-auto w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
