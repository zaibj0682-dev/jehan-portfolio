"use client";
import { useEffect, useRef, useState } from "react";

export default function LazyVideo({ src, style }: { src: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) {
      ref.current?.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <video ref={ref} muted loop playsInline preload="none" style={style}>
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
