import Image from "next/image";
import styles from "./style.module.scss";

function CustomImage({
  className,
  containerStyle,
  src,
  height,
  width,
  alt,
}) {
  return (
    <div className={`${styles.imgContainerStyle} ${containerStyle}`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </div>
  );
}

export { CustomImage };
