import React from "react";
import { Box, Grid } from "@mui/material";
import { styles } from "./styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Text from "@/components/GsoftText";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";

interface Props {
  isMatch?: boolean;
  visible?: boolean;
  onClick?: (value: number) => void;
  index?: number;
  last?: boolean;
  hoverbg?: string;
  hoverColor?: string;
  descColor?: string;
  image?: string;
  description?: any;
  title?: string;
  category?: string;
  pathname?: any;
}
function SliderCard(props: Props) {
  const { visible, index = 0, image = "" } = props;

  return (
    <Grid
      style={{
        cursor: visible ? "default" : "pointer",
        transform: visible ? "scaleY(1.1)" : "",
        filter: visible ? "" : "blur(1.5px)",
        alignItems: "center",
        display: "flex",
      }}
      sx={{
        width: {
          xs: "85vw",
          sm: "60vw",
          lg: "40vw",
        },
      }}
    >
      <Box
        sx={{
          height: {
            xs: visible ? 150 : 150,
            sm: visible ? 350 : 300,
            md: visible ? 350 : 300,
            lg: visible ? 350 : 300,
          },
          width: "100%",
          cursor: "pointer",
        }}
      >
        <GSoftImage src={image} alt={index.toString()} />
      </Box>
    </Grid>
  );
}

export function SliderFooter(props: Props) {
  const {
    onClick = () => {},
    index = 0,
    last,
    hoverbg,
    hoverColor,
    descColor,
    title = "",
    description = "",
    category,
  } = props;

  const goToNext = () => {
    onClick(index + 1);
  };
  const goToPrv = () => {
    onClick(index - 1);
  };
  return (
    <Grid
      item
      container
      xs={12}
      md={4.9}
      style={{
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CustomContainer>
        <Grid container xs={12} lg={12} md={12} sx={styles.mainCardItems} style={{ width: "100%" }}>
          <Grid item xs={12} sm={12} lg={9.3} md={8}>
            <Text variant="h3" variantMapping={{ h3: "h2" }} name={title} />
          </Grid>
          <Grid item xs={12} sm={12} lg={2.7} md={4}>
            {index != 0 && (
              <ArrowBackIcon
                onClick={goToPrv}
                style={{
                  background: hoverbg,
                  color: hoverColor,
                  borderRadius: "50px",
                  padding: "8px",
                  fontSize: "2.5rem",
                  marginRight: "10px",
                }}
              />
            )}
            {!last && (
              <ArrowForwardIcon
                onClick={goToNext}
                style={{
                  background: hoverbg,
                  color: hoverColor,
                  borderRadius: "50px",
                  padding: "8px",
                  fontSize: "2.5rem",
                  marginRight: "2px",
                }}
              />
            )}
          </Grid>
        </Grid>

        <Grid sx={styles.mainCardTechnologies}>
          <Text fontSize={"16px"} sx={(styles.mainPara, { color: descColor })} name={description} />
          {category?.split(",").map((tag) => {
            return <Text key={`${tag}-${index}`} sx={styles.technologyHeadings} fontSize={"14px"} name={tag} />;
          })}
        </Grid>
      </CustomContainer>
    </Grid>
  );
}

export default SliderCard;
