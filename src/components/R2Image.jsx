import { useState } from "react";
import { cn } from "../utils/cn.js";

export default function R2Image({ alt, className, loading, mobileSrc, src, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  const image = (
    <img
      src={src}
      alt={alt}
      className={cn("r2-image", loaded && "is-loaded", className)}
      loading={loading}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      {...props}
    />
  );

  if (!mobileSrc) return image;

  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      {image}
    </picture>
  );
}
