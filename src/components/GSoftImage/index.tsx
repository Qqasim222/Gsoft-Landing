"use client";
import React from "react";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

interface props extends ImageProps {
  zIndex?: number;
}
const GSoftImage = (props: props) => {
  const [error, setError] = useState(false);
  // const { zIndex = -1 } = props;
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        fill={props?.width && props?.height ? false : true}
        {...props}
        src={error ? "/images/noImage.jpeg" : props.src}
        style={{
          // objectFit: "cover",
          ...props.style,
        }}
        onError={() => {
          setError(true);
        }}
        priority
        placeholder="blur"
        blurDataURL="/images/loaderShim.png"
      />
    </Box>
  );
};

export default GSoftImage;
