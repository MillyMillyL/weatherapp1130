import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ImageCollage from "../components/ImageCollage";
import ControlledAccordions from "../components/Accordion";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" component="h1">
          Immerse into the Falls
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
            alt=""
            height={325}
          />
          <ImageCollage />
        </Box>
        <Box>
          <Typography variant="h6" component="h2" marginTop={3}>
            About the Ticket
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            fugit molestias dignissimos! Consequatur, excepturi, illum magnam
            repellendus in dicta magni laudantium dignissimos ipsam cumque,
            maiores quaerat quas deserunt voluptas non!
          </Typography>
        </Box>
        <Box marginBottom={10}>
          <Typography variant="h6" component="h2" marginY={3}>
            Frequently Asked Questions
          </Typography>
          <ControlledAccordions />
        </Box>
        <Box sx={{ width: 500, backgroundColor: "blue" }}>
          <BottomNavigation showLabels>
            <BasicModal />
          </BottomNavigation>
        </Box>
      </Container>
    </div>
  );
};

export default Tour;
