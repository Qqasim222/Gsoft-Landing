import React from "react";
import { Box, Grid,TypographyProps } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import GSoftImage from "@/components/GSoftImage";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface Props extends TypographyProps {
  image: string;
  name: string;
  description: string;
  pathname: any;
}

const Block = (props: Props) => {
  const route = useRouter();
  const { name, description, image } = props;

  return (

    <Grid
      container
      item
      sm={6}
      xs={12}
      md={4}
      lg={3}
      sx={styles.container}
      onClick={() => {
        route.push(props.pathname);
      }}
    >
               <Link href={props.pathname} style={{textDecoration:"none", color:"black"}}>

      <Grid item sm={6} xs={12} md={12} sx={styles.img}>
        <Box
          sx={{
            height: 60,
            width: 60,
          }}
        >
          <GSoftImage src={image} alt={"image"} style={{ objectFit: "cover" }} />
        </Box>

        <Text sx={styles.styling} fontSize={24} fontWeight={"bold"} name={name} />
        <Text variant="body2" name={description} />
      </Grid>
      </Link>

    </Grid>
  );
};

export default Block;
