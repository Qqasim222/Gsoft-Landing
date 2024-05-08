"use client";
import React, { useEffect, useRef } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { SnapList, SnapItem, useVisibleElements, useScroll } from "react-snaplist-carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styles } from "./styles";
import SliderCard, { SliderFooter } from "./Card";
import Text from "@/components/GsoftText";
import { PortfolioListQuery, PortfolioListProps } from "@/types/home";
import { useLazyQuery } from "@apollo/client";
import { PORTFOLIO_LIST } from "@/api/graphql/queries/home";
import { CustomContainer } from "@/components/layout";
import Link from "next/link";
const PortfolioCard = (props: PortfolioListProps) => {
  const { bgcolor, color, hoverbg, hoverColor, descColor, tags = [] } = props;
  const theme = useTheme();
  const [tabIndex, setTabValue] = React.useState(0);
  const themes = useTheme();
  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    getPortPortfolioList({
      variables: { filters: { portfolio_category: { id: { eq: tags[newValue].id } } } },
    });
    setTabValue(newValue);
  };
  useEffect(() => {
    if (tags.length == 0) {
      return;
    }
    getPortPortfolioList({
      variables: { filters: { portfolio_category: { id: { eq: tags[0].id } } } },
    });
  }, [tags]);
  const [getPortPortfolioList, { loading, data }] = useLazyQuery<PortfolioListQuery>(PORTFOLIO_LIST);
  const isMatch = useMediaQuery(themes.breakpoints.down("xs"));
  const snapList = useRef(null);
  const visible = useVisibleElements({ debounce: 10, ref: snapList }, ([element]) => element);
  const goToSnapItem = useScroll({ ref: snapList });
  const TabIndicatorProps = {
    style: {
      color: theme.palette.secondary.light,
      background: theme.palette.secondary.contrastText,
    },
  };
  const portfolioList = data?.portfolios.data || [];

  useEffect(() => {
    goToSnapItem(1);
    return () => {};
  }, [portfolioList]);
  return (
    <Grid container sx={styles.container} style={{ backgroundColor: bgcolor, color: color }}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.box}>
          <Text
            variant="h5"
            variantMapping={{
              h5: "h2",
            }}
            name="Our Work"
            textAlign={"center"}
          />
          <Text variant="h2" name="Portfolio" />

          <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.text}>
            <Tabs
              value={tabIndex}
              onChange={onChangeTab}
              TabIndicatorProps={TabIndicatorProps}
              allowScrollButtonsMobile={true}
              variant="scrollable"
              sx={styles.tabs}
            >
              {tags.map((item) => (
                <Tab
                  key={item.id}
                  sx={styles.tab}
                  style={{
                    color: color,
                  }}
                  label={item.attributes.name}
                />
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </CustomContainer>
      {loading ? (
        <Grid
          style={{
            width: isMatch ? "90vw" : "40vw",
            minHeight: 200,
            backgroundColor: "#FFFEF7",
          }}
        ></Grid>
      ) : (
        <>
          <CustomContainer>
            <SnapList ref={snapList} direction={"horizontal"}>
              {portfolioList.map((item, index) => (
                <SnapItem
                  key={index}
                  margin={{
                    left: index == 0 && isMatch ? "5vw" : index == 0 ? "30vw" : "15px",
                    right:
                      index == portfolioList.length - 1 && isMatch
                        ? "5vw"
                        : index == portfolioList.length - 1
                        ? "30vw"
                        : "15px",
                  }}
                  snapAlign="center"
                >
                  <Link href={`/portfolio/${item?.attributes?.slug}`}>

                 
                  <SliderCard
                    image={item.attributes.coverPicture.data.attributes.url}
                    onClick={goToSnapItem}
                    visible={visible === index || isMatch}
                    isMatch={isMatch}
                    index={1}
                    last={index == portfolioList.length - 1}
                    hoverbg={hoverbg}
                    hoverColor={hoverColor}
                    descColor={descColor}
                  />
                   </Link>
                </SnapItem>
              ))}
            </SnapList>
          </CustomContainer>

          {portfolioList.length > 0 && (
            <SliderFooter
              onClick={goToSnapItem}
              isMatch={isMatch}
              index={visible}
              last={visible == portfolioList.length - 1}
              hoverbg={hoverbg}
              hoverColor={hoverColor}
              descColor={descColor}
              title={portfolioList[visible]?.attributes?.title}
              description={[portfolioList[visible]?.attributes?.description.slice(0, 200), "...."]}
              category={portfolioList[visible]?.attributes?.tags}
            />
          )}
        </>
      )}
    </Grid>
  );
};

export default PortfolioCard;
