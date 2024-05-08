import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Grid,
  Box,
  CardContent,
  Typography,
  CircularProgress,
  Pagination,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styles } from "./styles";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { CustomContainer } from "@/components/layout";
import { useState } from "react";
import Link from "next/link";

const JobSearch = (props: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const { jobsList = [], loading } = props;

  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(jobsList?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedData = jobsList?.slice(startIndex, endIndex);
  return (
    <CustomContainer>
      <Grid container sx={styles.container} item lg={12} md={12} sm={12} xs={12}>
        <Grid
          sx={styles.searchgrid}
          container
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ display: "flex", alignItems: "center", marginTop: "40px", gap: "20px" }}
          justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Box component="form" sx={styles.searchInput}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Job"
              inputProps={{ "aria-label": "Search Job" }}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onChange={(e) => props?.saveSearchText(e.currentTarget.value)}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>

          <Box component="form" sx={styles.selectFeild}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "#808080 !important" }}>Experience</InputLabel>
              <Select label="Experience" onChange={(e) => props?.saveExperienceText(e.target.value)}>
                {/* <MenuItem value={"All"}>All</MenuItem> */}
                <MenuItem value={"Experience 6 Months"}>6 Months</MenuItem>
                <MenuItem value={"Experience 1 Years"}>1 Year </MenuItem>
                <MenuItem value={"Experience 2 Years"}>2 Years</MenuItem>
                <MenuItem value={"Experience 3 Years"}>3 Years</MenuItem>
                <MenuItem value={"Experience 4 Years"}>4 Years</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box component="form" sx={styles.selectFeild}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "#808080 !important" }}>Category</InputLabel>
              <Select label="Category" onChange={(e) => props?.saveCategoryText(e.target.value)}>
                {/* <MenuItem value={"All"}>All</MenuItem> */}
                <MenuItem value={"Development"}>Development</MenuItem>
                <MenuItem value={"Management"}>Management</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid sx={styles.cardBo} container item lg={12} md={12} sm={12} xs={12}>
          {loading ? (
            <Grid container sx={{ justifyContent: "center" }}>
              <CircularProgress style={{ color: "#16B1E1" }} />
            </Grid>
          ) : (
            slicedData?.length > 0 &&
            slicedData?.map((item: any , index:number) => {
              const newStartDate = new Date(item?.attributes?.openingDate);
              const newEndDate = new Date(item?.attributes?.closeingDate);
              const one_day = 1000 * 60 * 60 * 24;
              const output = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / one_day);
              return (
                <Box sx={styles.cardBox} key={"CardContent" + index}>
                  <CardContent>
                    <Box>
                      <Typography variant="h4" sx={styles.cardHeading}>
                        {item?.attributes?.title}
                      </Typography>
                      <Typography sx={styles.cityHeading}>{item?.attributes?.city}</Typography>
                    </Box>
                    <Box style={{ height: "90px", display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
                      <Typography sx={styles.cardHeading}>{item?.attributes?.experience}</Typography>
                      <Typography sx={styles.cardHeading}>{item?.attributes?.education}</Typography>
                    </Box>
                    <Link href={`/jobDetails/${item?.attributes?.slug}`} style={{textDecoration:"none",color:"black"}}>
                    <Box sx={styles.cardBoxapply} >
                      <Typography variant="body1" sx={styles.cardsubapply}>
                        Apply Now
                      </Typography>
                      <ArrowForwardIcon sx={styles.cardIcon} />
                      <ScheduleIcon sx={styles.cardIcon2}  />
                      <Typography variant="caption" sx={styles.cardsubapplybox4}>
                        {`${output} days left`}
                      </Typography>
                    </Box>
                    </Link>
                  </CardContent>
                </Box>
              );
            })
          )}
        </Grid>
        {slicedData.length < totalPages && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        )}
      </Grid>
    </CustomContainer>
  );
};

export default JobSearch;
