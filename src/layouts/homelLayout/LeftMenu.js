import { Chip, Grid, Typography } from "@mui/material";
import React from "react";

export default function LeftMenu() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sx={{ bgcolor: "#313B54", p: 2 }}>
          <Typography align="left" sx={{ color: "white" }}>
            <Chip label="&copy;" sx={{ bgcolor: "blue", color: "white" }} />{" "}
            CORE<b>UI </b>
            <Chip
              label="Pro"
              sx={{ bgcolor: "#378FE1", color: "white", p: 0 }}
              justifyContent="right"
            />
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#45536D", p: 1 }}>
          <Typography align="left" sx={{ color: "white" }}>
            DASHBOARD{" "}
            <Chip
              label="New"
              sx={{ bgcolor: "#378FE1", color: "white" }}
              justifyContent="right"
            />
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 4 }}>
          <Typography align="left" sx={{ color: "white", pl: 2 }}>THEME</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl:4 }}>Colors</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Typography</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 4 }}>
        <Typography align="left" sx={{ color: "white", pl: 2 }}>COMPONENTS</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Base</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Buttons</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Charts</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Editors</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Forms</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Google Maps</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Icons</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Notification</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Plugins</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Tables</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Widgets</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 4 }}>
          <Typography align="left" sx={{ color: "white", pl: 2 }}>EXTRAS</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1, pb: 1 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Pages</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pb: 2 }}>
          <Typography align="left" sx={{ color: "white", pl: 4 }}>Apps</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
