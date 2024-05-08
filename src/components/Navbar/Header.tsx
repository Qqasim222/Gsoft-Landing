"use client";
import Link from "next/link";
import { pages } from "./data";
import CustomDrawer from "./Drawer";
import { styles } from "./styles";
import { usePathname } from "next/navigation";
import Logo from "@assest/images/logo.png";
import CustomMenu from "@/components/HeaderPopUp";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { AppBar, Box, Button, Toolbar, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material";
import { useQuery } from "@apollo/client";
import { SERVICES_LIST } from "@/api/graphql/queries/footer";
import GSoftImage from "@/components/GSoftImage";

interface Props {
  backgroundColor?: string;
}
const Header = ({ backgroundColor = "transparent" }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();

  const theme = useTheme();
  const { data: development } = useQuery(SERVICES_LIST, {
    variables: {
      filters: {
        service_category: {
          title: {
            eq: "Development",
          },
        },
      },
    },
  });
  const { data: other } = useQuery(SERVICES_LIST, {
    variables: {
      filters: {
        service_category: {
          title: {
            eq: "Other",
          },
        },
      },
    },
  });
  const { data: desgin } = useQuery(SERVICES_LIST, {
    variables: {
      filters: {
        service_category: {
          title: {
            eq: "Design",
          },
        },
      },
    },
  });
  const developmentServices = development?.services?.data || [];
  const otherServices = other?.services?.data || [];
  const desginServices = desgin?.services?.data || [];
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [showModal, setShowModal] = React.useState(false);
  const ChangeNavBarColor = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });
  // useEffect(() => {
  //   if (router.pathname.includes("/about")) {
  //     setValue(0);
  //   } else if (router.pathname.includes("/services")) {
  //     setValue(1);
  //   } else if (router.pathname.includes("/portfolio")) {
  //     setValue(2);
  //   } else if (router.pathname.includes("/blogs")) {
  //     setValue(3);
  //   } else if (router.pathname.includes("/careers")) {
  //     setValue(4);
  //   } else if (router.pathname.includes("/contact")) {
  //     setValue(5);
  //   } else if (router.pathname.includes("/life-at-gsoft")) {
  //     setValue(6);
  //   } else if (router.pathname.includes("/estimate-your-project")) {
  //     setValue(7);
  //   }
  // }, [router.pathname]);

  const handleClick = (index: number) => () => {
    if (index == 1) {
      setShowModal(true);
      return;
    }
    setShowModal(false);
  };

  const handlePopoverClose = () => {
    setShowModal(false);
  };

  return (
    <AppBar component="nav">
      <Toolbar
        sx={{
          ...styles.toolbar,
          boxShadow: ChangeNavBarColor ? 3 : 0,
          backgroundColor: ChangeNavBarColor ? theme.palette.secondary.main : backgroundColor,
        }}
      >
        <Box>
          <Link href="/">
            <Box
              sx={{
                height: 45,
                width: 154,
              }}
            >
              <GSoftImage width={154} height={45} src={Logo} alt="Logo" />
            </Box>
          </Link>
        </Box>
        {isMatch ? (
          <>
            <CustomDrawer services={[...developmentServices, ...desginServices, ...otherServices]} />
          </>
        ) : (
          <>
            <Box sx={styles.headerTabs}>
              {pages.map((page, index) => (
                <Link id={"index" + index} key={index} href={page.link} style={{ opacity: 1, paddingLeft: "18px" }}>
                  <Button
                    onMouseEnter={handleClick(index)}
                    endIcon={
                      index == 1 && showModal ? <KeyboardArrowUp /> : index == 1 ? <KeyboardArrowDownIcon /> : <></>
                    }
                    sx={{
                      color:
                        pathname.length < 3 && index === 0
                          ? "secondary.contrastText"
                          : index === pages.findIndex((page) => page.link === pathname)
                          ? "secondary.contrastText"
                          : "secondary.light",
                      fontSize: "16px",
                      textTransform: "none",
                      opacity: 1,
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Link href="/estimate-your-project">
              <Button
                variant="outlined"
                style={{ fontSize: "16px", fontWeight: "600", marginRight: "13px" }}
                sx={styles.headerButton}
              >
                Estimate Your Project
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
      {showModal && (
        <CustomMenu
          onMouseLeave={handlePopoverClose}
          developmentServices={developmentServices}
          desginServices={desginServices}
          otherServices={otherServices}
          hideModel={() => {
            setShowModal(false);
          }}
        />
      )}
    </AppBar>
  );
};

export default Header;
