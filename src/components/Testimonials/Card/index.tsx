import React from "react";
import { Grid, useMediaQuery, useTheme, TypographyProps, Box } from "@mui/material";
import { Avatar } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { styles } from "./styles";
import Text from "@/components/GsoftText";

import Testimonal from "@assest/images/Testimonal.png";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";

interface Props extends TypographyProps {
  visible: boolean;
  onClick: () => void;

  reviews: string;
  user: {
    name: string;
    designation: string;
    image: string;
    imageName: string;
  };
}

function Testimonial(props: Props) {
  const { visible, onClick, user, reviews } = props;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      onClick={onClick}
      sx={styles.box}
      style={{
        width: isMatch ? "90vw" : "33vw",
      }}
    >
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.grid}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={styles.gridCard}>
            <Card
              sx={styles.card}
              style={{
                background: visible ? theme.palette.error.main : theme.palette.success.dark,
                width: visible ? "110%" : "88%",
                height: visible ? "270px" : "197px",
                filter: visible ? "" : "blur(1.5px)",
              }}
            >
              <CardContent>
                <GSoftImage src={Testimonal} alt="Card Image" />
              </CardContent>
              <CardContent>
                <Text
                  variantMapping={{ subtitle2: "p" }}
                  name={reviews}
                  variant="subtitle2"
                  sx={styles.headerCard}
                  style={{
                    fontSize: visible ? "20px" : "15px",
                  }}
                />
              </CardContent>
            </Card>
            <Grid sx={styles.dot1}></Grid>
            <Grid sx={styles.dot2}></Grid>

            <Avatar
              alt="Name"
              src={user.image}
              sx={styles.avatar}
              style={{
                background: visible ? theme.palette.error.main : theme.palette.success.dark,
                width: visible ? "88px" : "67px",
                height: visible ? "88px" : "67px",
                border: visible ? "5px solid #16B1E1" : "4px solid #16B1E1",
                filter: visible ? "" : "blur(1.5px)",
              }}
            />
            <Text
              name={user.name}
              variant="h3"
              sx={styles.bottomHeader}
              style={{
                filter: visible ? "" : "blur(1.5px)",
                fontSize: visible ? "40px" : "15px",
              }}
            />
            <Text
              name={user.designation}
              variant="h5"
              variantMapping={{ h5: "p" }}
              sx={styles.designation}
              style={{
                filter: visible ? "" : "blur(1.5px)",
                fontSize: visible ? "18px" : "15px",
              }}
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
}

export default Testimonial;
