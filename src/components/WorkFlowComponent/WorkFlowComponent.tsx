import React from "react";
import { Box, Grid, GridProps } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import GSoftImage from "@/components/GSoftImage";

interface Props extends GridProps {
  logo: string;
  name: string;
  desc: string;
}

const WorkFlowComponent = (props: Props) => {
  const { logo, name, desc } = props;

  return (
    <Grid container item md={3} sm={5.5} xs={12} sx={styles.container} {...props}>
      <Box sx={{ width: 55, height: 55, mb: "15px" }}>
        <GSoftImage src={logo} alt={"WorkFLow Count"} style={{ objectFit: "contain" }} />
      </Box>

      <Text
        variant="h5"
        variantMapping={{
          h5: "p",
        }}
        name={name}
        sx={styles.lowerText}
      />
      <Text variant="body2" name={desc} sx={styles.desc} />
    </Grid>
  );
};

export default WorkFlowComponent;
