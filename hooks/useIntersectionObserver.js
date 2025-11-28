// hooks/useIntersectionObserver.js
"use client";

import { useState, useEffect, useRef } from "react";

export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

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
export function useStaggeredIntersection(itemCount, options = {}) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const refs = useRef([]);

  const { threshold = 0.1, rootMargin = "0px", staggerDelay = 150 } = options;

  useEffect(() => {
    const observers = [];

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

  const setRef = (index) => (element) => {
    refs.current[index] = element;
  };

  const isItemVisible = (index) => visibleItems.has(index);

  return { setRef, isItemVisible };
}
