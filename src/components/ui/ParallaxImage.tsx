import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  width = 1280,
  height = 854,
  priority = false,
}: ParallaxImageProps) {
  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}
