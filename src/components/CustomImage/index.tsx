import Image, { ImageProps } from "next/image";

interface CustomImageProps extends Omit<ImageProps, "alt"> {
  alt: string; // alt is required for accessibility
  className?: string;
  priority?: boolean; // for above-the-fold images
}

const CustomImage = ({
  alt,
  className,
  priority = false,
  ...props
}: CustomImageProps) => (
  <Image
    {...props}
    alt={alt}
    className={className}
    loading={priority ? undefined : "lazy"}
    priority={priority}
    sizes={props.sizes || "100vw"}
  />
);

export default CustomImage;
