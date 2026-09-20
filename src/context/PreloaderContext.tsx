"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const PreloaderContext = createContext({
  isReadyToAnimate: false,
  setReady: () => {},
});

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);
  
  // Force a black screen instantly when the user hits refresh or navigates away.
  // This prevents iOS Safari/Chrome from capturing the current Hero screen and
  // displaying it as a "paint hold" during the next load.
  useEffect(() => {
    const handleBeforeUnload = () => {
      const blocker = document.createElement("div");
      blocker.style.position = "fixed";
      blocker.style.top = "0";
      blocker.style.left = "0";
      blocker.style.width = "100vw";
      blocker.style.height = "100vh";
      blocker.style.backgroundColor = "#060606";
      blocker.style.zIndex = "99999999";
      document.body.appendChild(blocker);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handleBeforeUnload);
    };
  }, []);

  return (
    <PreloaderContext.Provider value={{ isReadyToAnimate, setReady: () => setIsReadyToAnimate(true) }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export const usePreloader = () => useContext(PreloaderContext);
