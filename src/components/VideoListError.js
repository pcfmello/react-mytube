import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { ErrorOutline } from "@material-ui/icons";

const styles = {
  flexContent: {
    display: "flex"
  },
  root: {
    flexDirection: "column",
    alignItems: "center"
  },
  description: {
    marginBottom: 24,
    lineHeight: 1.6,
    fontSize: 24,
    color: "grey"
  },
  descriptionChild: {
    justifyContent: "center"
  },
  icon: {
    color: "grey",
    width: "25%",
    height: "25%",
    minWidth: 200,
    minHeight: 200
  }
};

const VideoListError = ({ classes }) => (
  <div className={classNames(classes.flexContent, classes.root)}>
    <div className={classes.description}>
      <div
        className={classNames(classes.flexContent, classes.descriptionChild)}
      >
        Nenhum vídeo encontrado
      </div>
      <div
        className={classNames(classes.flexContent, classes.descriptionChild)}
      >
        Tente refazer sua busca
      </div>
    </div>
    <ErrorOutline className={classes.icon} />
  </div>
);

VideoListError.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoListError);
