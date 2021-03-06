import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
import { compose } from "recompose";
import Truncate from "react-truncate";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, Typography } from "@material-ui/core";

import VideoListError from "./VideoListError";
import VideoListSkeleton from "./VideoListSkeleton";
import { playVideo } from "../store/actions/play-video";

const styles = {
  horizontalDividerVideoList: {
    marginBottom: 8
  },
  listItem: {
    padding: "0"
  },
  image: {
    marginRight: 8
  },
  videoData: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    height: 90
  },
  title: {
    lineHeight: 1.2
  },
  channelTitle: {
    color: "grey"
  }
};

const VideoList = ({ classes, play, loading, videos }) => {
  const renderVideo = video => (
    <ListItem
      key={video.etag}
      className={classNames(
        classes.horizontalDividerVideoList,
        classes.listItem
      )}
      disableGutters
      button
      onClick={() => play(video)}
    >
      <div className={classes.image}>
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          height={video.snippet.thumbnails.default.height}
          width={video.snippet.thumbnails.default.width}
        />
      </div>
      <div className={classes.videoData}>
        <Typography gutterBottom variant="subtitle2" className={classes.title}>
          <Truncate lines={3} ellipsis={<span>...</span>}>
            {video.snippet.title}
          </Truncate>
        </Typography>
        <Typography gutterBottom className={classes.title}>
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {video.snippet.description}
          </Truncate>
        </Typography>
        <div className={classes.channelInformation}>
          <Typography noWrap className={classes.channelTitle}>
            {video.snippet.channelTitle}
          </Typography>
        </div>
      </div>
    </ListItem>
  );

  return (
    <List disablePadding>
      {loading && <VideoListSkeleton times={5} />}
      {!loading && videos.map(video => renderVideo(video))}
      {!loading && !videos.length && <VideoListError />}
    </List>
  );
};

VideoList.propTypes = {
  loading: PropTypes.bool,
  videos: PropTypes.array,
  play: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  videos: state.find.videos,
  loading: state.find.loading,
  error: state.find.error
});

const mapDispatchToProps = dispatch => ({
  play: video => dispatch(playVideo(video))
});

const enhance = compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(VideoList);
