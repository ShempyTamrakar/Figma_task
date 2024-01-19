/** @format */

// /** @format */

// import { Card, Grid, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { getApihandler } from "../../Apihandler";

// import Avatar from "@mui/material/Avatar";

// export default function Users() {
//   const [data, setData] = useState([]);
//   console.log("data==>", data);
//   useEffect(() => {
//     getVehicleAll();
//   }, []);

//   // API's Function
//   const getVehicleAll = async () => {
//     const response = await getApihandler("/posts");
//     console.log("getUserAll response===>", response);
//     setData(response);
//   };

//   return (
//     <>
//
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";
import { getApihandler } from "../../Apihandler";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import logo from "../../images/images.jpg";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ToggleButton from "@mui/material/ToggleButton";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import cardimg from "../../images/bailey-anselme-Bkp3gLygyeA-unsplash-min.jpg";
const drawerWidth = 350;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window?: () => Window;
// }

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const [data, setData] = useState([]);
  console.log("data==>", data);
  useEffect(() => {
    getVehicleAll();
  }, []);

  // API's Function
  const getVehicleAll = async () => {
    const response = await getApihandler("/posts");
    console.log("getUserAll response===>", response);
    setData(response);
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const style = {
    display: "flex",
    alignitems: "center",

    padding: "20px",
    gap: "30px",
  };
  const [showContent, setShowContent] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const handleContentToggle = () => {
    setShowContent(!showContent);
    setShowCards(false); // Ensure only one section is visible at a time
  };

  const handleCardsToggle = () => {
    setShowCards(!showCards);
    setShowContent(false); // Ensure only one section is visible at a time
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        ></Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Card lg={3}>
            <div style={style}>
              <div>
                <Avatar src={logo} />
              </div>
              <div>
                <Typography>Hi Reader</Typography>
                <Typography>Here's your news !</Typography>
              </div>
            </div>
          </Card>
          <Card sx={{ padding: "20px", width: "200px" }}>
            <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
              View Toggle
            </Typography>
            <ToggleButton
              value="left"
              aria-label="left aligned"
              onClick={handleContentToggle}
            >
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton
              value="left"
              aria-label="left aligned"
              onClick={handleCardsToggle}
            >
              <FormatAlignLeftIcon />
            </ToggleButton>
          </Card>
        </Drawer>
      </Box>
      {showContent && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {data.slice(start, end).map((val) => {
            return (
              <Card sx={{ minWidth: 275, marginTop: "20px" }}>
                <Grid container sx={{ padding: "20px" }}>
                  <Grid
                    lg={1}
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Avatar src={logo} />
                  </Grid>
                  <Grid lg={10}>
                    <Typography sx={{ textAlign: "start", fontWeight: "700" }}>
                      {val.title}
                    </Typography>
                    <Typography sx={{ textAlign: "start" }}>
                      {val.body}
                    </Typography>
                    <Typography sx={{ textAlign: "start", color: "#8080809e" }}>
                      Monday 21 dec,2020 14:57 GMT
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
          <Grid container spacing={2}></Grid>
          {/* <Stack spacing={2}>
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack> */}
        </Box>
      )}

      {data.slice(start, end).map(
        (val, index) =>
          showCards &&
          index < 3 && (
            <div key={val.id}>
              <Card
                sx={{ maxWidth: 300, marginRight: "20px", marginLeft: "10px" }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.body}
                    </Typography>
                    <Typography sx={{ textAlign: "start", color: "#8080809e" }}>
                      Monday 21 dec,2020 14:57 GMT
                    </Typography>
                  </CardContent>
                  <CardMedia component="img" height="140" image={cardimg} />
                </CardActionArea>
              </Card>
            </div>
          )
      )}
    </Box>
  );
}
