// import React from "react";
import { Grid, Typography, TypographyProps } from "@mui/material";
import { styles } from "./styles";
import { NumberWidgetCounter } from "react-number-counter-widget";

interface Props extends TypographyProps {
  count: any;
  title: string;
}

const CountsComponent = (props: Props) => {
  const { count, title } = props;

  return (
    <Grid container item md={6} sm={6} sx={styles.container}>
      <Typography variant="h2" style={{ display: "flex" }}>
        <NumberWidgetCounter number={Number(count)} timeMs={10000} />+
      </Typography>
      <Typography variant="h5" variantMapping={{ h5: "p" }}>
        {title}
      </Typography>
    </Grid>
  );
};

export default CountsComponent;
