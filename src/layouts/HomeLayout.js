import React from "react";
import LeftMenu from "./homelLayout/LeftMenu";
import MainDashboard from "./homelLayout/MainDashboard";
import { Grid } from "@mui/material";

export default function HomeLayout() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={2} sx={{ bgcolor: "lightblue" }}>
          <LeftMenu />
        </Grid>
        <Grid item xs={12} sm={10} sx={{ bgcolor: "lightgreen" }}>
          <MainDashboard />
        </Grid>
      </Grid>
    </div>
  );
}
