import React, { useEffect, useRef } from "react";
import { Grid, useTheme, useMediaQuery} from "@mui/material";
import { SnapList, SnapItem, useVisibleElements, useScroll } from "react-snaplist-carousel";
import { styles } from "./styles";
import Card from "./Card";
import Text from "@/components/GsoftText";
import { TestimonialProps } from "@/types/home";
import { CustomContainer } from "@/components/layout";

const Technologies = (props: TestimonialProps) => {
  const { list } = props;
  const snapList = useRef(null);

  const visible = useVisibleElements({ debounce: 10, ref: snapList }, ([element]) => element);
  const goToSnapItem = useScroll({ ref: snapList });
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    goToSnapItem(1);
    return () => {};
  }, []);
  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.box}>
          <Text
            variant="h5"
            variantMapping={{
              h5: "h2",
            }}
            name="Testimonials"
            textAlign={"center"}
            color={theme.palette.secondary.light}
          />
          <Text variant="h2" name="What Our Clients Say" color={theme.palette.secondary.light} />
        </Grid>
      </CustomContainer>
      <CustomContainer>
        <SnapList direction={"horizontal"} ref={snapList}>
          {list?.map((item, index) => (
            <SnapItem
              key={index}
              margin={{
                left: index == 0 && isMatch ? "5vw" : index == 0 ? "30vw" : "35px",
                right: list.length - 1 == 4 && isMatch ? "5vw" : index == list.length - 1 ? "30vw" : "35px",
              }}
              snapAlign="center"
            >
              <Card
                reviews={item.attributes.review}
                user={{
                  name: item?.attributes?.user?.data?.attributes?.username,
                  designation: item?.attributes?.user?.data?.attributes?.designation,
                  image: item?.attributes?.user?.data?.attributes?.profilePicture?.data?.attributes?.url,
                  imageName: item?.attributes?.user?.data?.attributes?.profilePicture?.data?.attributes?.name,
                }}
                visible={visible === index || isMatch}
                onClick={() => goToSnapItem(index)}
              />
            </SnapItem>
          ))}
        </SnapList>
      </CustomContainer>
    </Grid>
  );
};

export default Technologies;
