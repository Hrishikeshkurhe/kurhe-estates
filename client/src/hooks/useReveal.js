import { useEffect, useRef, useState } from 'react';

// Adds the shared .reveal / .reveal-left / .reveal-right entrance animation
// used throughout the site. Returns a ref to attach and a className to add.
export function useReveal(direction = 'up') {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
  return [ref, `${base}${inView ? ' in' : ''}`];
}
