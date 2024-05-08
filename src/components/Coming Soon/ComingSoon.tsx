import React from "react";

import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function ComingSoon() {
  return (
    <>
      <Box
        sx={{
          padding: "200px 0",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid sx={{ justifyContent: "center", display: "flex" }}>
          <Typography variant="h1" sx={{ color: "white" }}>
            Coming Soon
          </Typography>
        </Grid>
      </Box>
    </>
  );
}
