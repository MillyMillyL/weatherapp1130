import React from "react";
import { AccessTime } from "@mui/icons-material";
import {
  createTheme,
  ThemeProvider,
  Rating,
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        { props: { variant: "body2" }, style: { fontSize: 11 } },
        { props: { variant: "body3" }, style: { fontSize: 9 } },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt="" className="img" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" compomnent="h2">
              {tour.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" compomnent="p" marginLeft={0.5}>
                {tour.duration} hour
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.1}
                size="small"
                readOnly
              />
              <Typography variant="body2" compomnent="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" compomnent="p" marginLeft={3}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" compomnent="h3" marginTop={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
