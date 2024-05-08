import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import job from "@assest/images/job.png";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";

import Aos from "aos";
import "aos/dist/aos.css";
const Job = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const Demodata = [
    {
      heading: "Explore our Careers page",
      detailInfo:
        "You can discover exciting opportunities to join our team and make a difference. Browse our current openings and learn more about our company culture, values, and benefits",
    },
    {
      heading: "Submit your application",
      detailInfo:
        "Follow the instructions on our Careers page to submit your resume and cover letter, and we'll be in touch soon!",
    },
    {
      heading: "Showcase your skills in Interview",
      detailInfo:
        "Be prepared to discuss your relevant experience and accomplishments, ask thoughtful questions, and demonstrate your enthusiasm for the position and the company. Remember to also highlight your soft skills, such as communication, teamwork, and problem-solving, as they are just as important as technical skills in many roles. Good luck!",
    },
  ];
  return (
    <CustomContainer>
      <Grid data-aos="fade-right" container item lg={12} md={12} sm={12} xs={12} sx={styles.container}>
        <Grid container md={6} sm={12} xs={12} lg={6}>
          <Box
            sx={{
              height: 600,
              width: 600,
            }}
          >
            <GSoftImage alt="image" src={job} style={{ objectFit: "cover" }} />
          </Box>
        </Grid>
        <Grid item sm={12} xs={12} md={5} lg={5} sx={styles.box} pl={2}>
          {Demodata?.map((item, index) => {
            return (
              <>
                <Typography mt={1} mb={1} sx={{ fontWeight: "600", fontSize: "20px" }}>
                  Step {index + 1}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    paddingTop: "10px",
                    fontSize: "28px",
                    lineHeight: "1.2",
                  }}
                >
                  {item?.heading}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "18px",
                    paddingTop: "15px",
                    color: "#555555",
                  }}
                >
                  {item?.detailInfo}
                </Typography>
              </>
            );
          })}
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default Job;
