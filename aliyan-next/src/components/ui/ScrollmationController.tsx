'use client';

import { useEffect } from 'react';

type SceneMetrics = {
  element: HTMLElement;
  top: number;
  height: number;
};

export function ScrollmationController() {
  useEffect(() => {
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-scroll-scene]'),
    );
    if (scenes.length === 0) return;

    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const metrics: SceneMetrics[] = [];
    let frame = 0;
    const hero = scenes.find((element) => element.id === 'top');
    let heroVisible = true;
    function updateAmbient() {
      hero?.style.setProperty('--ambient-play-state',
        heroVisible && !document.hidden && !motionPreference.matches ? 'running' : 'paused');
    }
    const visibilityObserver = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver((entries) => {
          heroVisible = entries.some((entry) => entry.isIntersecting);
          updateAmbient();
        });
    if (hero) visibilityObserver?.observe(hero);

    function updateProgress() {
      frame = 0;

      scenes.forEach((element, index) => {
        const scene = metrics[index];
        if (!scene) return;

        const progress = motionPreference.matches
          ? 0
          : Math.min(
              1,
              Math.max(
                0,
                element.id === 'top'
                  ? window.scrollY / scene.height
                  : (window.scrollY + window.innerHeight - scene.top) /
                      (scene.height + window.innerHeight),
              ),
            );
        // Hold the opening scene steady before a reversible, scroll-driven exit.
        const sceneProgress = element.id === 'top'
          ? Math.max(0, (progress - 0.15) / 0.85)
          : progress;
        element.style.setProperty('--scene-progress', sceneProgress.toFixed(4));
      });
    }

    function scheduleUpdate() {
      updateAmbient();
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(updateProgress);
    }

    function measureScenes() {
      metrics.length = 0;
      scenes.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        metrics.push({
          element,
          top: bounds.top + window.scrollY,
          height: Math.max(bounds.height, 1),
        });
      });
      scheduleUpdate();
    }

    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(measureScenes);
    scenes.forEach((element) => resizeObserver?.observe(element));
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', measureScenes);
    motionPreference.addEventListener('change', scheduleUpdate);
    document.addEventListener('visibilitychange', updateAmbient);

    measureScenes();

    return () => {
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      document.removeEventListener('visibilitychange', updateAmbient);
      hero?.style.removeProperty('--ambient-play-state');
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', measureScenes);
      motionPreference.removeEventListener('change', scheduleUpdate);
      if (frame !== 0) window.cancelAnimationFrame(frame);
      scenes.forEach((element) => element.style.removeProperty('--scene-progress'));
    };
  }, []);

  return null;
}
