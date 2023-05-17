import { Grid, Typography } from "@mui/material";
import React from "react";

export default function MainDashboard() {
  return (
    <div>
      <Grid container sx={{ p: 2 }}>
        <Grid item>
          <Typography>Main Dashboard</Typography>
        </Grid>
      </Grid>
      
    </div>
  );
}
