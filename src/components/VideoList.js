import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, Typography } from "@material-ui/core";
import Truncate from "react-truncate";
import Skeleton from "react-loading-skeleton";
import { playVideo } from "../store/actions/play-video";

const styles = theme => ({
  listItem: {
    padding: "0 24px 0 0",
    marginBottom: 8
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
  },
  // skeleton
  skeleton: {
    display: "flex",
    marginBottom: 8
  },
  skeletonDescription: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 24px 0 0"
  },
  skeletonDescriptionItem: {
    padding: "0 24px 0 0"
  }
});

class VideoList extends Component {
  renderVideo = video => (
    <ListItem
      key={video.etag}
      className={this.props.classes.listItem}
      disableGutters
      button
      onClick={() => this.props.play(video)}
    >
      <div className={this.props.classes.image}>
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          height={video.snippet.thumbnails.default.height}
          width={video.snippet.thumbnails.default.width}
        />
      </div>
      <div className={this.props.classes.videoData}>
        <Typography
          gutterBottom
          variant="subtitle2"
          className={this.props.classes.title}
        >
          <Truncate lines={3} ellipsis={<span>...</span>}>
            {video.snippet.title}
          </Truncate>
        </Typography>
        <Typography gutterBottom className={this.props.classes.title}>
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {video.snippet.description}
          </Truncate>
        </Typography>
        <div className={this.props.classes.channelInformation}>
          <Typography noWrap className={this.props.classes.channelTitle}>
            {video.snippet.channelTitle}
          </Typography>
        </div>
      </div>
    </ListItem>
  );

  skeleton = () => (
    <div className={this.props.classes.skeleton}>
      <span
        style={{ marginRight: 8 }}
        className={this.props.classes.skeletonImage}
      >
        <Skeleton height={90} width={120} />
      </span>
      <div className={this.props.classes.skeletonDescription}>
        <Skeleton height={14} />
        <div style={{ width: "55%" }}>
          <Skeleton
            height={14}
            className={this.props.classes.skeletonDescriptionItem}
          />
        </div>
        <div
          style={{ width: "70%", marginBottom: 8 }}
          className={this.props.classes.skeletonDescriptionItem}
        >
          <Skeleton height={14} />
        </div>
        <div
          style={{ width: "40%" }}
          className={this.props.classes.skeletonDescriptionItem}
        >
          <Skeleton height={14} />
        </div>
      </div>
    </div>
  );

  render = () => (
    <React.Fragment>
      {!this.props.loading &&
        Array.from({ length: 5 }).map(item => this.skeleton())}
      {!this.props.loading && (
        <List disablePadding>
          {this.props.videos.map(video => this.renderVideo(video))}
        </List>
      )}
    </React.Fragment>
  );
}

VideoList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
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
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(VideoList);
