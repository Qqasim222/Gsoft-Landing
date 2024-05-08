import React from "react";
import { Box, Grid } from "@mui/material";
import { StaticImageData } from "next/image";

import { styles } from "./styles";
import Text from "@/components/GsoftText";
import GSoftImage from "@/components/GSoftImage";

interface Props {
  image: StaticImageData;
  text: string;
}

const BenefitComponent = (props: Props) => {
  const { image, text } = props;

  return (
    <Grid item md={4} sm={12} xs={12} sx={styles.container}>
      {image && (
        <Box
          sx={{
            width: 50,
            height: 50,
          }}
        >
          <GSoftImage src={image} alt="image" />
        </Box>
      )}
      <Text variant="body2" name={text} sx={styles.text} />
    </Grid>
  );
};

export default BenefitComponent;
