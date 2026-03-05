import { useRef, useState, useEffect } from 'react';

/**
 * Scroll-driven parallax: returns a ref and an offset (in px) to apply as translateY.
 * @param {number} speed - Multiplier for scroll-based movement (e.g. 0.12 = subtle)
 * @returns {{ ref: React.RefObject<HTMLElement>, offset: number }}
 */
export function useParallax(speed = 0.1) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distance = (viewportCenter - elementCenter) * speed;
      setOffset(distance);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return { ref, offset };
}

/**
 * Current scroll Y in pixels.
 * @returns {number}
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
}
