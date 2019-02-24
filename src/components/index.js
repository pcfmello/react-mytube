import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

const styles = {
  main: {
    padding: "24px 36px"
  },
  logo: {
    width: "75%"
  }
};

const Main = ({ classes }) => (
  <div className={classes.main}>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={24}
    >
      <Grid item xs={2}>
        <img
          className={classes.logo}
          srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79I8t6Agc7dlC72VoIzUwvDBvMNVTsM92QmcB1vPJMFJn68dX"
          alt="Logo"
        />
      </Grid>
      <Grid item xs={10}>
        <SearchBar />
      </Grid>
    </Grid>
    <Grid container direction="row" spacing={24}>
      <Grid item md={8} xs={12}>
        <VideoPlayer />
      </Grid>
      <Grid item md={4} xs={12}>
        <VideoList />
      </Grid>
    </Grid>
  </div>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
