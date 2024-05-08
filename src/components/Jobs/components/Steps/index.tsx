import React from "react";
import { Grid } from "@mui/material";

import { styles } from "./styles";
import Text from "@/components/GsoftText";

interface Props {
  step: string;
  title: string;
  desc: string;
}

const Steps = (props: Props) => {
  const { step, title, desc } = props;

  return (
    <Grid item sx={styles.container}>
      <Text variant="h5" variantMapping={{ h5: "p" }} name={step} />
      <Text variant="h3" name={title} />
      <Text variant="h6" variantMapping={{ h6: "p" }} name={desc} />
    </Grid>
  );
};

export default Steps;
