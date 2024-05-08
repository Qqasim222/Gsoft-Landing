import React from "react";
import { Button, ButtonProps, Typography } from "@mui/material";

import { TypographyProps } from "@mui/material";

interface Props extends ButtonProps {
  name: string;
  heading?: TypographyProps;
}
const CommonButton = (props: Props) => {
  const { name } = props;
  return (
    <Button {...props}>
      <Typography {...props.heading}>{name}</Typography>
    </Button>
  );
};

export default CommonButton;
