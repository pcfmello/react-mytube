import React from "react";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = {
  skeleton: {
    display: "flex"
  },
  skeletonImage: {
    marginRight: 8
  },
  skeletonDescription: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  horizontalDivider: {
    marginBottom: 8
  }
};

const VideoListSkeleton = ({ times, classes }) =>
  Array.from({ length: times }).map((item, index) => (
    <div
      key={index}
      className={classNames(classes.horizontalDivider, classes.skeleton)}
    >
      <span className={classes.skeletonImage}>
        <Skeleton height={90} width={120} />
      </span>
      <div className={classes.skeletonDescription}>
        <Skeleton height={14} />
        <div style={{ width: "55%" }}>
          <Skeleton height={14} />
        </div>
        <div className={classes.horizontalDivider} style={{ width: "70%" }}>
          <Skeleton height={14} />
        </div>
        <div style={{ width: "40%" }}>
          <Skeleton height={14} />
        </div>
      </div>
    </div>
  ));

VideoListSkeleton.propTypes = {
  times: PropTypes.number,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoListSkeleton);
