"use client";
import { useEffect } from "react";
import { usePreloader } from "@/context/PreloaderContext";

export default function PreloaderReady() {
  const { setVideoReady } = usePreloader();
  useEffect(() => { setVideoReady(); }, []);
  return null;
}
