import React, { useState, useCallback } from "react";
import {
  Typography,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { styles } from "./styles";
import { pages } from "./data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DrawerComp = ({ services = [] }: any) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const paperStyle = {
    color: theme.palette.primary.light,
    top: "57px",
    width: "100%",
    boxShadow: "none",
    backgroundColor: theme.palette.secondary.main,
  };
  const onClickDrawer = useCallback(() => {
    setOpenDrawer(!openDrawer);
  }, []);
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: paperStyle,
        }}
      >
        <List sx={styles.drawerList}>
          {pages.map((page, index) => {
            if (page.name == "Services") {
              return (
                <>
                  <Accordion elevation={0} sx={{ backgroundColor: "transparent", color: "white", border: "none" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {services.map((item: any, index: any) => (
                        <ListItemButton key={`${item?.id}-${index}`}>
                          <>
                          <Link href={`/services/${item?.attributes?.slug}`} style={{textDecoration:"none"}}>
                          
                          <Box
                          >
                            <ListItemText sx={styles.drawerText}>{item.attributes.title}</ListItemText>
                          </Box>
                          </Link>
                          </>
                          
                        </ListItemButton>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            }

            return (
              <ListItemButton key={index}>
                <Link href={page.link} style={{ textDecoration: "none" }}>
                  <ListItemText sx={styles.drawerText}>{page.name}</ListItemText>
                </Link>
              </ListItemButton>
            );
          })}
           <Link href="/estimate-your-project">
           <Button
            variant="outlined"
            style={{ fontSize: "16px", color: "white" }}
            sx={styles.RespoheaderButton}
          >
            Estimate Your Project
          </Button>
           </Link>
         
        </List>
      </Drawer>
      <IconButton aria-label="Drawer" sx={styles.drawerIcon} onClick={onClickDrawer}>
        {openDrawer ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
