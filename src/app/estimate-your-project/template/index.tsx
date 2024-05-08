"use client";
import Layout, { CustomContainer } from "@/components/layout";
import React, { useEffect } from "react";
import { styles } from "@/components/EstimateProject/Style";
import { gql, useMutation } from "@apollo/client";
import { Grid, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationEstimate } from "@/components/add-validation/validation";
import { ESTIMATE_YOUR_PROJECT } from "@/api/graphql/queries/estimate-your-project";
import { Field, Form, Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import { uploadFileClient } from "@/api/graphql/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EstimateProject = (props: any) => {
  const theme = useTheme();
  const [image, setImage] = React.useState({});
  const [createEstimateYourProject, { data, loading }] = useMutation(ESTIMATE_YOUR_PROJECT);
  const notify = () => toast.success("Your ticket has been submitted");
  useEffect(() => {
    if (data?.createEstimateYourProject?.data && !loading) {
      notify();
    }
  }, [loading]);
  const submitHandler = async (values: any) => {
    const { data } = await uploadFileClient.mutate({
      mutation: gql`
        mutation ($file: Upload!) {
          upload(file: $file) {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      `,
      variables: { file: image },
    });
    const imageUrl = data?.upload?.data?.id || "";

    createEstimateYourProject({
      variables: {
        data: {
          companyName: values.companyName,
          description: values.description,
          email: values.email,
          name: values.firstName,
          phoneNo: values.phoneNumber,
          priority: values.priority,
          projectStatus: values.projectStatus,
          projectType: values.projectType,
          selectYourRegion: values.region,
          image: imageUrl,
        },
      },
    });
  };

  return (
    <Layout
      header={{
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.MainGrid}>
          <Grid container item lg={8} md={12} sm={12} xs={12} sx={styles.GridBox}>
            <>
              <Formik
                initialValues={{
                  firstName: "",
                  companyName: "",
                  description: "",
                  email: "",
                  phoneNumber: "",
                  priority: "",
                  image: "",
                  projectStatus: "",
                  projectType: "",
                  region: "",
                }}
                validationSchema={validationEstimate}
                onSubmit={submitHandler}
              >
                {({ values, errors, touched, handleSubmit, handleChange }) => (
                  <Form onSubmit={handleSubmit}>
                    <Grid container item lg={12} md={12} sm={12} xs={12} style={{ justifyContent: "center" }}>
                      <Grid item lg={12} md={12} sm={12} xs={11} sx={{ paddingTop: "80px" }}>
                        <Typography variant="h1" sx={{ color: "#16B1E1", fontWeight: "600" }}>
                          Estimation Your Project
                        </Typography>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={11}>
                        <Typography sx={{ color: "black", fontWeight: "600", fontSize: "24px", paddingTop: "20px" }}>
                          Fill in the Below Form to Receive a Detailed Estimation
                        </Typography>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={11}>
                        <Typography sx={{ color: "#A5A3A3", fontWeight: "300", fontSize: "16px", paddingTop: "8px" }}>
                          {"You're just one step away to get a quick and detail estimate from our team"}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      gap={2}
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      style={{ paddingTop: "40px", justifyContent: "center" }}
                    >
                      <Grid item lg={5.5} md={5.5} sm={11} xs={11}>
                        <Field
                          as={TextField}
                          required
                          placeholder="Name"
                          name="firstName"
                          variant="outlined"
                          label="Name"
                          value={values?.firstName}
                          error={touched?.firstName && Boolean(errors?.firstName)}
                          helperText={touched?.firstName && errors?.firstName}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#A5A3A3", fontSize: "16px", fontWeight: "300" },
                          }}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item lg={5.5} md={5.5} sm={11} xs={11}>
                        <Field
                          as={TextField}
                          type="email"
                          name="email"
                          label="Email Address"
                          placeholder="Enter Here"
                          required
                          value={values?.email}
                          error={touched?.email && Boolean(errors?.email)}
                          helperText={touched?.email && errors?.email}
                          onChange={handleChange}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: {
                              color: "#A5A3A3",
                              fontSize: "16px",
                              fontWeight: "300",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container gap={2} item lg={12} md={12} sm={12} xs={12} style={{ justifyContent: "center" }}>
                      <Grid item lg={5.5} md={5.5} sm={11} xs={11}>
                        <Field
                          as={TextField}
                          type="number"
                          name="phoneNumber"
                          variant="outlined"
                          label="Phone Number"
                          value={values?.phoneNumber}
                          placeholder="Enter Here"
                          onChange={handleChange}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: { color: "#A5A3A3", fontSize: "16px", fontWeight: "300" },
                          }}
                        />
                      </Grid>
                      <Grid item lg={5.5} md={5.5} sm={11} xs={11}>
                        <Field
                          as={TextField}
                          type="text"
                          name="companyName"
                          label="Company Name"
                          placeholder="Enter Here"
                          required
                          //value={values?.companyName}
                          value={values?.companyName}
                          error={touched?.companyName && Boolean(errors?.companyName)}
                          helperText={touched?.companyName && errors?.companyName}
                          onChange={handleChange}
                          sx={styles.TextFeild}
                          InputLabelProps={{
                            style: {
                              color: "#A5A3A3",
                              borderColor: "#A5A3A3",
                              fontSize: "16px",
                              fontWeight: "300",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      gap={2}
                      item
                      lg={12}
                      md={11.3}
                      sm={12}
                      xs={12}
                      style={{ margin: "0 auto", justifyContent: "center" }}
                    >
                      <Grid item lg={5.5} md={5.85} sm={11} xs={11} sx={styles.TextFeild}>
                        {/* <FormControl
                            
                            required
                            style={{ color: "#A5A3A3", fontSize: "16px", fontWeight: "300", width: "100%" }}
                          > */}
                        {/* <InputLabel style={{ color: "#A5A3A3", fontSize: "16px" }}>Project Type</InputLabel> */}
                        <Field
                          sx={{ width: "100%" }}
                          required
                          as={TextField}
                          select
                          name="projectType"
                          value={values?.projectType}
                          error={touched?.projectType && Boolean(errors?.projectType)}
                          helperText={touched?.projectType && errors?.projectType}
                          onChange={handleChange}
                          label={"Project Type"}
                          InputLabelProps={{
                            style: { color: "#A5A3A3" },
                          }}
                        >
                          <MenuItem value={"Mobile Development"}>Mobile Development</MenuItem>
                          <MenuItem value={"Back-End Development"}>Back-End Development</MenuItem>
                          <MenuItem value={"DevOps"}>DevOps</MenuItem>
                          <MenuItem value={"Logo Design and Brand"}>Logo Design and Brand</MenuItem>
                          <MenuItem value={"Mobile App Design"}>Mobile App Design</MenuItem>
                          <MenuItem value={"Quality Assurance"}>Quality Assurance</MenuItem>
                          <MenuItem value={"Web Design"}>Web Design</MenuItem>
                          <MenuItem value={"UI/UX Design"}>UI/UX Design</MenuItem>
                          <MenuItem value={"Web Development Company"}>Web Development Company</MenuItem>
                          <MenuItem value={"Cloud Services"}>Cloud Services</MenuItem>
                        </Field>
                        {/* </FormControl> */}
                      </Grid>
                      <Grid item lg={5.5} md={5.85} sm={11} xs={11} sx={styles.TextFeild}>
                        {/* <FormControl
                            sx={styles.TextFeild}
                            required
                            style={{ color: "#A5A3A3", fontSize: "16px", fontWeight: "300", width: "100%" }}
                          > */}
                        {/* <InputLabel style={{ color: "#A5A3A3", fontSize: "16px" }}>Priority</InputLabel> */}
                        <Field
                          sx={{ width: "100%" }}
                          required
                          as={TextField}
                          select
                          name="priority"
                          label="Priority"
                          onChange={handleChange}
                          value={values?.priority}
                          error={touched?.priority && Boolean(errors?.priority)}
                          helperText={touched?.priority && errors?.priority}
                          InputLabelProps={{
                            style: { color: "#A5A3A3" },
                          }}
                        >
                          <MenuItem value={"High"}>High</MenuItem>
                          <MenuItem value={"Medium"}>Medium</MenuItem>
                          <MenuItem value={"Low"}>Low</MenuItem>
                        </Field>
                        {/* </FormControl> */}
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      gap={2}
                      item
                      lg={12}
                      md={11.3}
                      sm={12}
                      xs={12}
                      style={{ margin: "0 auto", justifyContent: "center" }}
                    >
                      <Grid item lg={5.5} md={5.85} sm={11} xs={11} sx={styles.TextFeild}>
                        {/* <FormControl
                            sx={styles.TextFeild}
                            required
                            style={{ color: "#A5A3A3", fontSize: "16px", fontWeight: "300", width: "100%" }}
                          > */}
                        {/* <InputLabel style={{ color: "#A5A3A3", fontSize: "16px" }}>Project Status</InputLabel> */}
                        <Field
                          sx={{ width: "100%" }}
                          required
                          as={TextField}
                          select
                          name="projectStatus"
                          label="Project Status"
                          value={values?.projectStatus}
                          error={touched?.projectStatus && Boolean(errors?.projectStatus)}
                          helperText={touched?.projectStatus && errors?.projectStatus}
                          InputLabelProps={{
                            style: { color: "#A5A3A3" },
                          }}
                        >
                          <MenuItem value={"New"}>New</MenuItem>
                          <MenuItem value={"On Going"}>On Going</MenuItem>
                        </Field>
                        {/* </FormControl> */}
                      </Grid>
                      <Grid item lg={5.5} md={5.85} sm={11} xs={11} sx={styles.TextFeild}>
                        {/* <FormControl
                            sx={styles.TextFeild}
                            required
                            style={{ color: "red", fontSize: "16px", fontWeight: "300", width: "100%" }}
                          > */}
                        {/* <InputLabel style={{ color: "#A5A3A3", fontSize: "16px" }}>Select your Region</InputLabel> */}
                        <Field
                          sx={{ width: "100%" }}
                          required
                          as={TextField}
                          select
                          name="region"
                          label="Select your Region"
                          value={values?.region}
                          error={touched?.region && Boolean(errors?.region)}
                          helperText={touched?.region && errors?.region}
                          InputLabelProps={{
                            style: { color: "#A5A3A3" },
                          }}
                        >
                          <MenuItem value={"American"}>American</MenuItem>
                          <MenuItem value={"Canada"}>Canada</MenuItem>
                          <MenuItem value={"Aurstralia"}>Australia</MenuItem>
                          <MenuItem value={"Amsterdam"}>Amsterdam</MenuItem>
                          <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
                        </Field>
                        {/* </FormControl> */}
                      </Grid>
                    </Grid>
                    <Grid item lg={12} md={11.9} sm={11.7} xs={12} sx={styles.TextFeild}>
                      <TextField
                        type="file"
                        id="avatar"
                        name="image"
                        onChange={(value: any) => {
                          setImage(value?.target?.files[0]);
                        }}
                        sx={styles.TextFeild}
                        style={{ width: "94%", margin: "0 auto" }}
                        InputLabelProps={{
                          style: { borderColor: "#A5A3A3", fontSize: "16px", fontWeight: "300" },
                        }}
                      />
                    </Grid>
                    <Grid item lg={12} md={11.9} sm={11.7} xs={12} sx={{ ...styles.TextFeild, paddingTop: "20px" }}>
                      <Field
                        as={TextField}
                        required
                        type="text"
                        name="description"
                        placeholder="Short Description"
                        sx={styles.TextFeild}
                        style={{ width: "94%" }}
                        rows={5}
                        maxRows={5}
                        value={values?.description}
                        error={touched?.description && Boolean(errors?.description)}
                        helperText={touched?.description && errors?.description}
                        onChange={handleChange}
                        multiline
                        InputLabelProps={{
                          style: { color: "#A5A3A3", borderColor: "#A5A3A3", fontSize: "16px", fontWeight: "300" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={11.7} md={11.9} lg={12}>
                      <LoadingButton
                        variant="contained"
                        type="submit"
                        sx={{
                          fontWeight: "700",
                          backgroundColor: "secondary.contrastText",
                          color: "black",
                          width: "95%",
                          height: "52px",
                          "&:hover": {
                            backgroundColor: "secondary.contrastText",
                          },
                        }}
                        // onClick={() => submitHandler(values)}
                        // disabled={
                        //   Object.keys(errors).length > 0
                        //     ? true
                        //     : !(
                        //         values?.fullName &&
                        //         values?.email &&
                        //         values?.phoneNumber &&
                        //         values?.companyName &&
                        //         // projectType &&
                        //         // priority &&
                        //         // projectStatus &&
                        //         // region &&
                        //         values?.description
                        //       )
                        //     ? true
                        //     : false
                        // }
                        disabled={Object.keys(errors).length > 0 ? true : values?.email ? false : true}
                      >
                        Get Estimate
                      </LoadingButton>
                    </Grid>
                    <ToastContainer />
                  </Form>
                )}
              </Formik>
            </>
          </Grid>
        </Grid>
      </CustomContainer>
    </Layout>
  );
};

export default EstimateProject;
