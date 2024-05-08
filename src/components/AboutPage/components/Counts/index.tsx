import React from "react";
import { Box, Grid } from "@mui/material";
import { styles } from "./styles";
import CountsComponent from "../CountsComponents";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";
interface props {
  count1: any;
  title1: any;
  count2: any;
  title2: any;
  count3: any;
  title3: any;
  count4: any;
  title4: any;
  countImg: any;
}

const Counts = ({ count1, title1, count2, title2, count3, title3, count4, title4, countImg }: props) => {
  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sx={styles.block}>
          <Box
            sx={{
              height: { lg: 500, xs: 300, sm: 400, md: 500 },
              width: { lg: 600, xs: 300, sm: 500, md: 600 },
            }}
          >
            <GSoftImage src={countImg} alt="image" style={{ borderRadius: 10 }} />
          </Box>
          <Grid container item lg={5} md={12} sm={10} sx={styles.box}>
            <CountsComponent count={count1} title={title1} />
            <CountsComponent count={count2} title={title2} />
            <CountsComponent count={count3} title={title3} />
            <CountsComponent count={count4} title={title4} />
          </Grid>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Counts;
