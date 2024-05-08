"use client";
import React from "react";
import { styles } from "./style";
import { Box, Grid, GridProps } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Text from "@/components/GsoftText";
import { Services } from "@/types/home";
import Link from "next/link";

interface Props extends GridProps {
  developmentServices: Services[];
  desginServices: Services[];
  otherServices: Services[];
  hideModel: () => void;
}

function ServicesTop(props: Props) {
  const { desginServices, otherServices, developmentServices, hideModel } = props;
  

  return (
    <Grid sx={styles.mainGrid} {...props} onClick={hideModel}>
      <Card sx={styles.container}>
        <Box sx={styles.services}>
          <CardContent>
            <Text
              variant="subtitle2"
              variantMapping={{ subtitle2: "h1" }}
              fontWeight="500"
              fontSize="20px"
              name="Development"
              sx={styles.cardHeading}
            ></Text>
            {developmentServices.map((item:any, index) => (
              <Link
                key={`${item?.id}-${index}`}
                href={ `/services/${item.attributes.slug}`}
                style={{ textDecoration: "none",whiteSpace:"nowrap"}} 
              >
                <Text
                  key={item.attributes.title}
                  variant="caption"
                  sx={styles.cardSubHeading}
                  name={item.attributes.title}
                ></Text>
              </Link>
            ))}
          </CardContent>
        </Box>
        <Box sx={styles.services_col2}>
          <CardContent>
            <Text
              variant="subtitle2"
              name="Design"
              fontWeight="500"
              fontSize="20px"
              variantMapping={{ subtitle2: "h1" }}
              sx={styles.cardHeading}
            ></Text>
            {desginServices.map((item, index) => (
              <Link
                key={`${index}`}
                href={`/services/${item.attributes.slug}`}          
                style={{ textDecoration: "none",whiteSpace:"nowrap" }}
              >
                <Text
                  key={item.attributes.title}
                  variant="caption"
                  sx={styles.cardSubHeading}
                  name={item.attributes.title}
                ></Text>
              </Link>
            ))}
          </CardContent>
        </Box>
        <Box sx={styles.services_col3}>
          <CardContent>
            <Text
              variant="subtitle2"
              name="Other Services"
              fontWeight="500"
              fontSize="20px"
              variantMapping={{ subtitle2: "h1" }}
              sx={styles.cardHeading}
            ></Text>
            {otherServices.map((item, index) => (
              <Link
                key={`${index}`}
                href={`/services/${item.attributes.slug}`}  
                style={{ textDecoration: "none" }}
              >
                <Text
                  key={item.attributes.title}
                  variant="caption"
                  sx={styles.cardSubHeading}
                  name={item.attributes.title}
                ></Text>
              </Link>
            ))}
          </CardContent>
        </Box>
        <Box sx={styles.endContainer2}>
          <CardContent>
            <Text
              variant="subtitle2"
              name="How we work"
              variantMapping={{ subtitle2: "h1" }}
              sx={styles.cardHeading}
            ></Text>
            <Text variant="caption" sx={styles.cardSubHeading} name="Discover"></Text>
            <Text variant="caption" sx={styles.cardSubHeading} name="Planning and Designing"></Text>
            <Text variant="caption" sx={styles.cardSubHeading} name="Development & Testing"></Text>
            <Text variant="caption" sx={styles.cardSubHeading} name="Deploy & Support"></Text>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}

export default ServicesTop;
