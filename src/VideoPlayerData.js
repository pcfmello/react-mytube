import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Moment from "moment";
import "moment/locale/pt-br";
import { withStyles } from "@material-ui/core/styles";

import { Typography, Divider, Avatar } from "@material-ui/core";

const styles = {
  horizontalSpacing: {
    margin: "24px 0"
  },
  descriptionFlex: {
    display: "flex",
    alignItems: "center"
  },
  descriptionBlock: {
    marginTop: 24
  },
  avatar: {
    marginRight: 16
  },
  description: {
    marginLeft: 56
  },
  channel: {
    lineHeight: 1.2
  }
};

const VideoPlayerData = ({ video, classes }) => (
  <React.Fragment>
    <Typography variant="h6">{video.snippet.title}</Typography>

    <div className={classes.horizontalSpacing}>
      <Divider />
      <div
        className={classNames(
          classes.descriptionBlock,
          classes.descriptionFlex
        )}
      >
        <div className={classes.avatar}>
          <Avatar alt="Foto do Canal">
            {video.snippet.channelTitle.substring(0, 1)}
          </Avatar>
        </div>
        <div>
          <Typography variant="subtitle2" className={classes.channel}>
            {video.snippet.channelTitle}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.channel}
          >
            Publicado em{" "}
            {Moment(video.snippet.publishedAt)
              .locale("pt-br")
              .format("ll")}
          </Typography>
        </div>
      </div>
      <div className={classNames(classes.description, classes.descriptionFlex)}>
        <Typography variant="body1" className={classes.horizontalSpacing}>
          {video.snippet.description}
        </Typography>
      </div>
      <Divider />
    </div>
  </React.Fragment>
);

VideoPlayerData.propTypes = {
  video: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoPlayerData);
