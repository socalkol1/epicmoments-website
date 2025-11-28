// hooks/useIntersectionObserver.ts
"use client";

import { useState, useEffect, useRef, useCallback, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn<T extends Element> {
  ref: RefObject<T | null>;
  isVisible: boolean;
}

export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn<T> {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T | null>(null);

  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If we've already animated and triggerOnce is true, don't observe again
    if (hasAnimated && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return { ref, isVisible };
}

// Hook for observing multiple elements with staggered animations
interface UseStaggeredIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

interface UseStaggeredIntersectionReturn {
  setRef: (index: number) => (element: HTMLElement | null) => void;
  isItemVisible: (index: number) => boolean;
}

export function useStaggeredIntersection(
  itemCount: number,
  options: UseStaggeredIntersectionOptions = {}
): UseStaggeredIntersectionReturn {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLElement | null)[]>([]);

  const { threshold = 0.1, rootMargin = "0px", staggerDelay = 150 } = options;

  useEffect(() => {
    const observers: { observer: IntersectionObserver; element: HTMLElement }[] = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add delay based on index for stagger effect
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
            }, index * staggerDelay);
            observer.unobserve(element);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);
      observers.push({ observer, element });
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [itemCount, threshold, rootMargin, staggerDelay]);

  const setRef = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      refs.current[index] = element;
    },
    []
  );

  const isItemVisible = useCallback(
    (index: number) => visibleItems.has(index),
    [visibleItems]
  );

  return { setRef, isItemVisible };
}
