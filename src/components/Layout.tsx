import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import NumberList from "./NumberList";

export default function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography>Number Facts & Trivia Generator</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={8}>
          <NumberList />
        </Grid>
        <Grid item xs={0} md={2} />
      </Grid>
    </>
  );
}
