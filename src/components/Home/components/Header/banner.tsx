import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import "aos/dist/aos.css";
import GSoftImage from "@/components/GSoftImage";
import GsoftBannerMobile from "@assest/images/gsoftbannermobile.png";
import GsoftBannerDesktop from "@assest/images/GsoftBannerDesktop.png";

const Banner = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <>
      {isMobile ? (
        <Box sx={{ width: "100%", height: { md: 800, xs: 850, sm: 850 }, position: "absolute", zIndex: -1, top: 0 }}>
          <GSoftImage src={GsoftBannerMobile} alt="GsoftBanner" quality={100} style={{ objectFit: "cover" }} />
        </Box>
      ) : (
        <Box sx={{ width: "100%", height: { md: 800, xs: 850, sm: 850 }, position: "absolute", zIndex: -1, top: 0 }}>
          <GSoftImage src={GsoftBannerDesktop} alt="GsoftBanner" quality={100} style={{ objectFit: "cover" }} />
        </Box>
      )}
    </>
  );
};

export default Banner;
