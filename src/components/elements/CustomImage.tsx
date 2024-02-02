import Image from "next/image";
import React from "react";

function CustomImage({ src, alt, customClass }: any) {
  return (
    <>
      <Image
        src={src}
        className={customClass}
        width={0}
        height={0}
        sizes="100vw"
        alt={alt || "Image"}
      />
    </>
  );
}

export default CustomImage;
