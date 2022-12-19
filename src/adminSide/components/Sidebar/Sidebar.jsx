import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../FlexBetween";
import profileImage from "../../assets/profile.jpeg";
import "./Sidebar.css";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    url: "dashboard",
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
    url: "products",
  },
  {
    text: "Category",
    icon: <Groups2Outlined />,
    url: "category",
  },
  {
    text: "Orders",
    icon: <ReceiptLongOutlined />,
    url: "orders",
  },
  {
    text: "Blog",
    icon: <PublicOutlined />,
    url: "blog",
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  // const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  // useEffect(() => {
  //   setActive(pathname.substring(1));
  // }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon, url }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                return (
                  <ListItem
                    key={text}
                    disablePadding
                    className="listItem__sidebar"
                  >
                    <NavLink
                      to={`/admin/${url}`}
                      className="nav__link--sidebar"
                      style={({ isActive }) =>
                        isActive
                          ? {
                              color: theme.palette.secondary[100],
                              backgroundColor: theme.palette.secondary[300],
                              textDecoration: "none",
                            }
                          : {
                              color: theme.palette.secondary[100],
                              backgroundColor: "transparent",
                              textDecoration: "none",
                            }
                            
                      }
                    >
                      <ListItemButton>
                        <ListItemIcon
                          className="icon_sidebar"
                          sx={{
                            ml: "2rem",
                            color: theme.palette.secondary[100],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
