import React from "react";
import { Box, Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import Text from "@/components/GsoftText";
import GSoftImage from "@/components/GSoftImage";

interface Props extends TypographyProps {
  image?: StaticImageData;
  name?: string;
  filter?: string;
}

const TecBlock = (props: Props) => {
  const { image, name } = props;

  return (
    <Grid
      container
      sx={{
        ml: "10px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: "5px",
        paddingBottom: "25px",
      }}
      item
      md={2}
      sm={2}
      xs={3}
    >
      <Box sx={{ width: "50px", height: "50px" }}>
        <GSoftImage alt="img" src={image} style={{ objectFit: "contain" }} />
      </Box>
      <Text variant="h5" variantMapping={{ h5: "p" }} name={name} sx={{ marginTop: "10px" }} />
    </Grid>
  );
};

export default TecBlock;
