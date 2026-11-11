"use client";

import { useEffect, useRef } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";

type Props = {
  /** Visual size preset */
  size?: "hero" | "intro";
  className?: string;
};

/**
 * Depth + time logo stage: layered rings, float, and light pointer parallax.
 * Prefer CSS 3D over heavy WebGL so the real brand mark stays crisp.
 */
export function LogoStage({ size = "hero", className = "" }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!stage || !tilt) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = px * 14;
      targetY = py * -10;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      tilt.style.setProperty("--logo-tilt-x", `${currentY.toFixed(2)}deg`);
      tilt.style.setProperty("--logo-tilt-y", `${currentX.toFixed(2)}deg`);
      frame = window.requestAnimationFrame(tick);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className={`logo-stage logo-stage--${size} ${className}`.trim()} aria-hidden="true">
      <div className="logo-stage-aura" />
      <div className="logo-stage-ring logo-stage-ring--a" />
      <div className="logo-stage-ring logo-stage-ring--b" />
      <div className="logo-stage-ring logo-stage-ring--c" />
      <div ref={tiltRef} className="logo-stage-tilt">
        <div className="logo-stage-plate">
          <OptimizedImage
            base={
              size === "intro"
                ? "/logo/qnvo-logo-horizontal-transparent"
                : "/logo/qnvo-logo-full-lockup-transparent"
            }
            alt=""
            width={size === "intro" ? 320 : 280}
            height={size === "intro" ? 116 : 186}
            sizes={size === "intro" ? "220px" : "(min-width: 1024px) 240px, 180px"}
            className="logo-stage-mark"
            // Intro must stay out of the LCP race; hero mark is below the fold on mobile.
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
