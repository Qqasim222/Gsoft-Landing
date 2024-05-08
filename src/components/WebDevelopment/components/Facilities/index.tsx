import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Text from "@/components/GsoftText";
import { styles } from "./styles";
import WhyUsComponent from "@/components/WebDevelopment/components/WhyUsComponent";
import quality from "public/images/quality.png";
import commitment from "public/images/commitment.png";
import reporting from "public/images/reporting.png";
import illustration from "public/images/illustration.png";
import transparency from "public/images/transparency.png";
import respect from "public/images/respect.png";
import trust from "public/images/trust.png";

const WhyUs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.block}>
        <Text name="Our Core Values" variant="h5" variantMapping={{ h5: "h2" }} />
        <Text name="Why Choose Us?" variant="h2" variantMapping={{ h2: "h1" }} />
      </Grid>

      <Grid container item md={11} sx={styles.grid}>
        <Grid container item md={3.5} sx={styles.box}>
          <WhyUsComponent
            image={quality}
            heading="Quality Customer Service"
            desc="We are always available to respond your queries and question. We use discord & slack for quick communication."
          />
          <WhyUsComponent
            image={commitment}
            heading="Commitment"
            desc="We are loyal to our all clients and deals and strive to go beyond your expectations. We oath to never make you disappointed."
          />
          <WhyUsComponent
            image={reporting}
            heading="Transparent Progress Reporting"
            desc="We do update our client weekly, bi-weekly or monthly as per the requirements."
          />
        </Grid>

        {isMatch ? (
          ""
        ) : (
          <Grid container item md={5} sx={styles.img}>
            <Image src={illustration} alt="img" layout="fixed" />
          </Grid>
        )}

        <Grid container item md={3.5} sx={styles.box}>
          <WhyUsComponent
            image={transparency}
            heading="Transparency"
            desc="We have nothing to hide and are completely transparent internally and externally with our clients. We believe in sharing secrets and admitting our mistakes."
          />
          <WhyUsComponent
            image={respect}
            heading="Respect"
            desc="All team members are treated with respect and they are expected to treat our clients with the same respect and cater for them a positive customer experience."
          />
          <WhyUsComponent
            image={trust}
            heading="More Trust & Authority"
            desc="We are one of the trustworthy Digital Marketing agencies to whom you can reliably hand over your businesses."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyUs;
