import { Chip, Grid, Typography } from "@mui/material";
import React from "react";

export default function LeftMenu() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sx={{ bgcolor: "#313B54", p: 2 }}>
          <Typography sx={{ color: "white" }}>
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
          <Typography sx={{ color: "white" }}>
            DASHBOARD{" "}
            <Chip
              label="New"
              sx={{ bgcolor: "#378FE1", color: "white" }}
              justifyContent="right"
            />
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 4 }}>
          <Typography sx={{ color: "white" }}>THEME</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Colors</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", p: 1 }}>
          <Typography sx={{ color: "white" }}>Typography</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 4, pb: 2 }}>
          <Typography sx={{ color: "white" }}>COMPONENTS</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Base</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Buttons</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Charts</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Editors</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Forms</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Google Maps</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Icons</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Notification</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Plugins</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Tables</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 1 }}>
          <Typography sx={{ color: "white" }}>Widgets</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 4, pb: 1 }}>
          <Typography sx={{ color: "white" }}>EXTRAS</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pt: 0, pb: 1 }}>
          <Typography sx={{ color: "white" }}>Pages</Typography>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: "#3B4B64", pb: 2 }}>
          <Typography sx={{ color: "white" }}>Apps</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
