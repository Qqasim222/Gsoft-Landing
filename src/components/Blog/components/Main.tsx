import { Container } from "@mui/system";
import WebDev from "@/components/WebDevelopment/components/WebDevelop";
import {} from "@emotion/react";
import { Grid, TextField } from "@mui/material";
import { styles } from "../styles";
import CommonButton from "@/components/Button/CommonButton";
import { CustomContainer } from "@/components/layout";
const MainHead = () => {
  return (
    <>
      <Container maxWidth={false} disableGutters style={{ backgroundColor: "#001A1F" }}>
        <WebDev
          heading="Blogs"
          desc=""
          component={
            <CustomContainer>
              <Grid container lg={12} md={12} sm={12} sx={styles.Grid}>
                <Grid item sm={4} md={3.9} xs={6} lg={3}>
                  <TextField
                    sx={styles.textField}
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    size="small"
                    label="Search the blog"
                  />
                </Grid>
                <Grid>
                  <CommonButton variant="contained" name="Search" sx={styles.button} />
                </Grid>
              </Grid>
            </CustomContainer>
          }
        />
      </Container>
    </>
  );
};

export default MainHead;
