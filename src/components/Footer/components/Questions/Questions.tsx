import React, { useEffect } from "react";
import { Grid, Box, useMediaQuery, useTheme, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import GSoftImage from "@/components/GSoftImage";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import CommonButton from "@/components/Button/CommonButton";
import { CustomContainer } from "@/components/layout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Aos from "aos";
import "aos/dist/aos.css";

const Questions = ({ askquestions }: any) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid data-aos="fade-right" container item lg={12} md={11} sm={11} sx={styles.box}>
          <Grid container item md={7} sm={12}>
            <Text
              fontSize={{ xs: "32px", sm: "48px", md: "48px", lg: "48px" }}
              fontWeight={"600"}
              name="Frequently Ask Questions"
              style={{ color: "black" }}
            />

            <Grid item md={10} sm={12} sx={styles.block}>
              {askquestions?.attributes?.questions?.map((questions: any, index: any) => {
                return (
                  <Box sx={styles.ques} key={`${questions?.id}-${index}`}>
                    <Accordion sx={styles.accordion} elevation={0}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "#3eb4e2" }} />}>
                        <Text
                          fontSize={{ xs: "18px", sm: "18px", md: "18px", lg: "18px" }}
                          variantMapping={{ h5: "p" }}
                          name={questions.question}
                          style={{ color: "black" }}
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Text
                          sx={styles.txt}
                          variant="body1"
                          name={questions.answer}
                          fontSize={{ xs: "16px", sm: "16px", md: "16px", lg: "16px" }}
                        />
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                );
              })}
              <CommonButton
                heading={{
                  variant: "h6",
                  variantMapping: { h6: "p" },
                }}
                name={askquestions?.attributes?.buttonText}
                sx={styles.button}
              />
            </Grid>
          </Grid>
          {!isMatch ? (
            <Grid container item md={5}>
              {askquestions?.attributes?.coverPicture?.data?.attributes?.url?.length > 0 ? (
                <Box
                  sx={{
                    width: { sm: 700, md: 730, lg: 590 },
                    height: { sm: 300, md: 310, lg: 410 },
                  }}
                >
                  <GSoftImage
                    alt="img"
                    src={askquestions?.attributes?.coverPicture?.data?.attributes?.url}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ) : null}
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Questions;
