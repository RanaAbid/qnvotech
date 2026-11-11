import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  /** Path without extension, e.g. `/logo/qnvo-logo-horizontal-transparent` */
  base: string;
};

/** Pre-built WebP source; Next still prefers AVIF via `images.formats` when optimizing. */
export function OptimizedImage({ base, alt, ...rest }: Props) {
  return <Image src={`${base}.webp`} alt={alt} {...rest} />;
}

type PictureFillProps = {
  base: string;
  alt: string;
  className?: string;
  fallbackExt?: "jpg" | "png";
  sizes: string;
  priority?: boolean;
  /** Intrinsic pixel size of the master asset (prevents CLS). */
  width?: number;
  height?: number;
  /** Emit 800/1200/1600 responsive candidates when true (heroes). */
  responsive?: boolean;
};

function srcSet(base: string, ext: "avif" | "webp", responsive: boolean): string {
  if (!responsive) return `${base}.${ext}`;
  return [`${base}-800.${ext} 800w`, `${base}-1200.${ext} 1200w`, `${base}.${ext} 1600w`].join(", ");
}

/** Full-bleed media using static AVIF → WebP → raster fallback (no double encode). */
export function PictureFill({
  base,
  alt,
  className = "",
  fallbackExt = "jpg",
  sizes,
  priority = false,
  width = 1600,
  height = 1067,
  responsive = true,
}: PictureFillProps) {
  return (
    <>
      {priority ? (
        <link
          rel="preload"
          as="image"
          type="image/avif"
          // Match responsive candidates so mobile LCP does not wait on the 1600w master.
          imageSrcSet={srcSet(base, "avif", responsive)}
          imageSizes={sizes}
          fetchPriority="high"
        />
      ) : null}
      <picture className={`absolute inset-0 block h-full w-full ${className}`}>
        <source type="image/avif" srcSet={srcSet(base, "avif", responsive)} sizes={sizes} />
        <source type="image/webp" srcSet={srcSet(base, "webp", responsive)} sizes={sizes} />
        {/* eslint-disable-next-line @next/next/no-img-element -- native <picture> needs a final raster fallback */}
        <img
          src={`${base}.${fallbackExt}`}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          decoding={priority ? "sync" : "async"}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="h-full w-full object-cover object-[center_30%]"
        />
      </picture>
    </>
  );
}
