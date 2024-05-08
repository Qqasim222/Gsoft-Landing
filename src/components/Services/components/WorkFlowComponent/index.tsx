import React from "react";
import { Grid, GridProps } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";

interface Props extends GridProps {
  num?: string;
  logo?: string;
  name?: string;
  desc?: string;
}

const WorkFlowComponent = (props: Props) => {
  const { num, logo, name, desc } = props;

  return (
    <Grid container item md={3} sm={5.5} xs={12} sx={styles.container} {...props}>
      <img src={logo} style={{ marginBottom: "15px" }} />
      <Text
        variant="overline"
        variantMapping={{
          overline: "h2",
        }}
        sx={{ color: "#16B1E1" }}
        name={num}
      />{" "}
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
