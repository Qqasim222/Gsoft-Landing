import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import WorkFlowComponent from "components/Services/components/WorkFlowComponent";
import { CustomContainer } from "components/layout";

const WorkFlow = ({ workflows }: any) => {
  const [isHover, setIsModal] = React.useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const handlePopoverOpen = () => {
    setIsModal(true);
  };

  const handlePopoverClose = () => {
    setIsModal(false);
  };
  return (
    <Grid container item md={12} sm={12} xs={12} sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.grid}>
          <Grid
            container
            item
            md={8}
            sm={12}
            sx={{
              ...styles.textContainer,
              position: isMatch ? "relative" : "absolute",
              opacity: isHover ? 0.2 : 1,
              display: isMatch ? "flex" : "block",
              justifyContent: isMatch ? "center" : "flex-start",
              alignItems: isMatch ? "center" : "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: isMatch ? "center" : "start",

                color: "white",
              }}
            >
              Work Flow
            </Text>
            <Text
              style={{
                fontSize: isMatch ? 32 : 48,
                textAlign: isMatch ? "center" : "start",
                fontWeight: "600",
              }}
            >
              Our Working Process
            </Text>
          </Grid>

          {workflows?.workflows?.map((item: any, index: any) => {
            return (
              <WorkFlowComponent
                key={`${item?.id}-${index}`}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                logo={item?.attributes?.logo?.data?.attributes?.url}
                name={item?.attributes?.title}
                desc={item?.attributes?.description}
              />
            );
          })}
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default WorkFlow;
