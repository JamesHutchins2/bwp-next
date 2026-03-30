"use client";

interface VideoBackgroundProps {
  src: string;
  priority?: boolean;
}

export default function VideoBackground({ src, priority = false }: VideoBackgroundProps) {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload={priority ? "metadata" : "none"}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
