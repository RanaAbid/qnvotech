import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  /** Path without extension, e.g. `/logo/qnvo-logo-horizontal-transparent` */
  base: string;
};

/** Pre-built WebP source; Next still prefers AVIF via `images.formats` when optimizing. */
export function OptimizedImage({ base, alt, ...rest }: Props) {
  return <Image src={`${base}.webp`} alt={alt} {...rest} />;
}

/** Full-bleed media using static AVIF → WebP → raster fallback (no double encode). */
export function PictureFill({
  base,
  alt,
  className = "",
  fallbackExt = "jpg",
  sizes,
  priority = false,
}: {
  base: string;
  alt: string;
  className?: string;
  fallbackExt?: "jpg" | "png";
  sizes: string;
  priority?: boolean;
}) {
  return (
    <picture className={`absolute inset-0 block h-full w-full ${className}`}>
      <source srcSet={`${base}.avif`} type="image/avif" sizes={sizes} />
      <source srcSet={`${base}.webp`} type="image/webp" sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element -- native <picture> needs a final raster fallback */}
      <img
        src={`${base}.${fallbackExt}`}
        alt={alt}
        sizes={sizes}
        decoding={priority ? "sync" : "async"}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-cover object-[center_30%]"
      />
    </picture>
  );
}
