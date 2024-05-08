import React from "react";
import { Box, Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import GSoftImage from "@/components/GSoftImage";

interface Props extends TypographyProps {
  image: StaticImageData;
  name: string;
  filter?: string;
  technologies: any;
}

const TabPanel = (props: Props) => {
  const { image, name } = props;

  return (
    <Grid
      container
      sx={{
        marginBottom: "10px",
        ml: "10px",
        mr: "10px",
        justifyContent: "center",
      }}
      item
      md={2}
      sm={2}
      xs={3}
    >
      <Grid sx={styles.container}>
        <Box
          sx={{
            height: 50,
            width: 50,
          }}
        >
          <GSoftImage alt="img" src={image} />
        </Box>
        <Text variant="h5" variantMapping={{ h5: "p" }} name={name} sx={{ marginTop: "20px" }} />
      </Grid>
    </Grid>
  );
};

export default TabPanel;
