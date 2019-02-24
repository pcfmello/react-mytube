import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const styles = {
  root: {
    flexDirection: "column"
  },
  container: {
    display: "flex",
    flexDirection: "row"
  },
  videoList: {
    justifyContent: "flex-end"
  }
};

const Main = ({ classes }) => (
  <Grid container spacing={16} className={classes.root}>
    <Grid item xs={12}>
      <SearchBar />
    </Grid>
    <Grid container className={classes.container} spacing={16}>
      <Grid item md={8} xs={12}>
        <VideoPlayer />
      </Grid>
      <Grid item md={4} xs={12}>
        <VideoList className={classes.videoList} />
      </Grid>
    </Grid>
  </Grid>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
