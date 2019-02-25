import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { YOUTUBE_LOGO_LARGE, YOUTUBE_LOGO_SMALL } from "../constants";

const styles = {
  main: {
    padding: "24px 36px"
  },
  logoLarge: {
    width: 120
  },
  logoSmall: {
    width: 90
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
      <Grid item xs={12} sm={2} xl={1}>
        <Hidden smDown>
          <img
            className={classes.logoLarge}
            srcSet={YOUTUBE_LOGO_LARGE}
            alt="Logo"
          />
        </Hidden>
        <Hidden only={["xs", "md", "lg", "xl"]}>
          <img
            className={classes.logoSmall}
            srcSet={YOUTUBE_LOGO_SMALL}
            alt="Logo"
          />
        </Hidden>
      </Grid>

      <Grid item xs={12} sm={10} xl={11}>
        <SearchBar />
      </Grid>
    </Grid>
    <Grid container direction="row" spacing={24}>
      <Grid item xs={12} md={8} lg={9}>
        <VideoPlayer />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <VideoList />
      </Grid>
    </Grid>
  </div>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
