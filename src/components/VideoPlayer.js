import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

const styles = {
  emptyPlayer: {
    width: "100%"
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
  },
  ReactPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
};

const VideoPlayer = props => (
  <React.Fragment>
    <div className="video-player">
      {!props.video.id && (
        <img
          className={props.classes.emptyPlayer}
          src="https://abrilveja.files.wordpress.com/2017/07/audi-a8.jpg"
          alt="Empty player"
        />
      )}
      {props.video.id && (
        <div>
          <div className={props.classes.playerWrapper}>
            <ReactPlayer
              className={props.classes.ReactPlayer}
              url={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}
              playing
              controls
              width="100%"
              height="100%"
            />
          </div>
          <h3>{props.video.snippet.title}</h3>
          <p>{props.video.snippet.description}</p>
        </div>
      )}
    </div>
  </React.Fragment>
);

VideoPlayer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  video: state.play.video
});

const enhance = compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    null
  )
);

export default enhance(VideoPlayer);
