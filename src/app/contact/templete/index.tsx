"use client";

import Layout, { CustomContainer } from "@/components/layout";
import { styles } from "@/components/Contact Us/style";
import { Grid, Button, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import TextField from "@mui/material/TextField";
import Progressbar from "@/components/ProgressBar/Progressbar";
import { ESTIMATE_PROJECT } from "@/api/graphql/queries/contact";
import ComingSoon from "@/components/Coming Soon/ComingSoon";
import GSoftImage from "@/components/GSoftImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Text from "@/components/GsoftText";
import { Field, Form, Formik } from "formik";
import { validationContact } from "@/components/add-validation/validation";
import Pakistan from "@assest/images/Pakistan.jpg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContactUs = (props: any) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [createContactPage, { data, loading }] = useMutation(ESTIMATE_PROJECT);
  const handleChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };
  const notify = () => toast.success("Your ticket has been submitted");

  useEffect(() => {
    if (data?.createContactPage?.data && !loading) {
      notify();
    }
  }, [loading]);
  const submitHandler = (values: any) => {
    createContactPage({
      variables: {
        data: {
          email: values.email,
          name: values.firstName,
          phoneNo: values.phone,
          message: values.message,
        },
      },
    });
  };

  return (
    <Layout >
      <Progressbar />
      <Grid>
        <Box sx={styles.Box}>
          <Tabs sx={{ width: "100%", marginTop: "2px" }} value={selectedTab} onChange={handleChange} centered>
            <Tab sx={{ width: "20%", color: "white" }} label="United Kingdom" />
            <Tab sx={{ width: "30%", color: "white" }} label="Pakistan" />
            <Tab sx={{ width: "30%", color: "white" }} label="Australia" />
          </Tabs>
          <CustomContainer>
            {selectedTab === 0 && (
              // <Grid container item md={12} sm={12} xs={12} sx={styles.tabsGrid}>
              //   <Typography fontSize="16px" sx={styles.text1}>
              //     United Kingdom
              //   </Typography>
              //   <Typography fontSize="16px" sx={styles.text2}>
              //     251 L, Block L Phase 2 Johar Town, Lahore, Punjab 54782, Pakistan.
              //   </Typography>
              // </Grid>
              <Box sx={styles.boxComingSoon}>
                <ComingSoon />
              </Box>
            )}
            {selectedTab === 1 && (
              <Grid container item md={12} sm={12} xs={12} sx={styles.tabsGrid}>
                <Typography fontSize="16px" sx={styles.text1}>
                  Lahore, Pakistan.
                </Typography>
                <Typography fontSize="16px" sx={styles.text2}>
                  391 N, Block N Phase 2 Johar Town, Lahore, Punjab
                </Typography>
                <Typography fontSize="16px" sx={styles.text2}>
                  (042) 32215942
                </Typography>
              </Grid>
            )}
            {selectedTab === 2 && (
              // <Grid container item md={12} sm={12} xs={12} sx={styles.tabsGrid}>
              //   <Typography fontSize="16px" sx={styles.text1}>
              //     Sydney,Aurstralia
              //   </Typography>
              //   <Typography fontSize="16px" sx={styles.text2}>
              //     251 L, Block L Phase 2 Johar Town, Lahore, Punjab 54782, Pakistan.
              //   </Typography>
              // </Grid>
              <Box sx={styles.boxComingSoon}>
                <ComingSoon />
              </Box>
            )}
          </CustomContainer>
        </Box>

        {/* {selectedTab === 0 && (
          <Grid item container xs={11} sm={12} md={8} lg={12} sx={styles.container}>
            <Image
              style={{ display: "flex", flexDirection: "row" }}
              src="/images/United_Kingdom.jpg"
              alt="contact"
              height={"300%"}
              width={"400%"}
            />
            <Image
              style={{ display: "flex", flexDirection: "row" }}
              src="/images/US_Map.png"
              alt="map"
              height={"300%"}
              width={"400%"}
            />
          </Grid>
        )} */}

        {selectedTab === 1 && (
          <Grid item container xs={11} sm={11} md={11} lg={12} sx={styles.container}>
            <Grid container xs={12} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  height: 500,
                  width: 940,
                }}
              >
                <GSoftImage src={Pakistan} alt="contact" />
              </Box>
            </Grid>
            <Grid container xs={12} sm={6} md={6} lg={6}>
              <iframe
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.242423160653!2d74.27392851553863!3d31.462516857143765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903d26abd8fc9%3A0xf621263f1dc5ff69!2sGlobal%20Software%20Consulting!5e0!3m2!1sen!2s!4v1673416915762!5m2!1sen!2s"
                width="940"
                height="500"
                frameBorder={0}
                loading="lazy"
              ></iframe>
            </Grid>
          </Grid>
        )}
        {/* {selectedTab === 2 && (
          <Grid item container xs={11} sm={12} md={8} lg={12} sx={styles.container}>
            <Image
              style={{ display: "flex", flexDirection: "row" }}
              src="/images/Aurstralia.jpg"
              alt="contact"
              height={"300%"}
              width={"400%"}
            />
            <Image
              style={{ display: "flex", flexDirection: "row" }}
              src="/images/Aurstralia_Map.jpeg"
              alt="map"
              height={"300%"}
              width={"400%"}
            />
          </Grid>

        )} */}
      </Grid>
      <CustomContainer>
        <Grid container item xs={12} sm={12} md={8} lg={12} sx={styles.form}>
          <Grid container item xs={11} sm={12} md={8} lg={12} rowSpacing={1.3} sx={styles.form}>
            <Text fontSize="20px" variant="h1" sx={styles.formHeading}>
              Let's start a project together
            </Text>
            <Typography sx={{ fontSize: "16px", fontWeight: "400", color: "#555555", paddingTop: "8px" }}>
              We make all your dreams come true in a successful project.
            </Typography>

            <Formik
              initialValues={{
                firstName: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationContact}
              onSubmit={submitHandler}
            >
              {({ values, errors, touched, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Field
                    as={TextField}
                    placeholder="Name"
                    required
                    name="firstName"
                    variant="outlined"
                    value={values?.firstName}
                    error={touched?.firstName && Boolean(errors?.firstName)}
                    helperText={touched?.firstName && errors?.firstName}
                    sx={{ width: "100%", paddingTop: "40px" }}
                  />
                  <Grid
                    container
                    gap={1.3}
                    item
                    lg={12}
                    md={12}
                    xs={12}
                    sm={12}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item lg={5.87} md={5.8} xs={12} sm={5.87} sx={{ paddingTop: "10px" }}>
                      <Field
                        as={TextField}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values?.email}
                        required
                        error={touched?.email && Boolean(errors?.email)}
                        helperText={touched?.email && errors?.email}
                        variant="outlined"
                        sx={{ width: "100%", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid item lg={5.87} md={5.8} xs={12} sm={5.87} sx={{ paddingTop: "10px" }}>
                      <Field
                        as={TextField}
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={values?.phone}
                        required
                        error={touched?.phone && Boolean(errors?.phone)}
                        helperText={touched?.phone && errors?.phone}
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Field
                      as={TextField}
                      type="message"
                      name="message"
                      placeholder="Message"
                      variant="outlined"
                      required
                      value={values?.message}
                      error={touched?.message && Boolean(errors?.message)}
                      helperText={touched?.message && errors?.message}
                      rows={5}
                      maxRows={5}
                      multiline
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      ...styles.buttonSubmit,
                    }}
                    // onClick={handleSubmit}
                    disabled={
                      Object.keys(errors).length > 0
                        ? true
                        : !(values?.firstName && values?.email && values?.phone && values?.message)
                        ? true
                        : false
                    }
                  >
                    Submit
                  </Button>
                  <ToastContainer />
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </CustomContainer>
    </Layout>
  );
};
export default ContactUs;
