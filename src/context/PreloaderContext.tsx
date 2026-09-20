"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const PreloaderContext = createContext({
  isReadyToAnimate: false,
  setReady: () => {},
});

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);
  
  return (
    <PreloaderContext.Provider value={{ isReadyToAnimate, setReady: () => setIsReadyToAnimate(true) }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export const usePreloader = () => useContext(PreloaderContext);
