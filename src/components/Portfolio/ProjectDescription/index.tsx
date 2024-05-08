/* eslint-disable no-unsafe-optional-chaining */
import React from "react";
import { Box, Grid } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import GSoftImage from "@/components/GSoftImage";
import Link from "next/link";

interface Props {
  image: StaticImageData;
  detail: any;
  pathname: any;
}

const MenuComponent = (props: Props) => {
  const { image, detail } = props;
  return (
    <Grid
      container
      item
      md={5}
      lg={3.8}
      sx={styles.container}
      style={{ backgroundColor: "" }}
      // onClick={() => {
      //   route.push(props.pathname);
      // }}
    >
      <Link href={props.pathname} style={{textDecoration:"none"}}>
      <Grid sx={{ textAlign: "center" }}>
        <Box sx={{ height: { xs: 150, sm: 170, md: 160, lg: 195 }, width: { xs: 299, sm: 340, md: 360, lg: 379 } }}>
          <GSoftImage src={image} alt="image" />
        </Box>
        <Box sx={styles.box}>
          <Text fontSize={"32px"} color={"secondary.main"} name={detail?.title} />
        </Box>
      </Grid>
      
      </Link>
      <Text sx={styles.desc} fontSize={"16px"} name={[...detail?.description?.slice(0, 200), "...."]} />
      {detail.tags?.split(",").map((tag: any, index: any) => {
        return <Text key={`${tag?.id}-${index}`} sx={styles.technologyHeadings} fontSize={"14px"} name={tag} />;
      })}
    </Grid>
  );
};

export default MenuComponent;
