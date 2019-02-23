import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Image, Dimmer, Loader } from "semantic-ui-react";

class VideoList extends Component {
  renderVideo = video => (
    <List key={video.etag} animated verticalAlign="middle">
      <List.Item>
        <Image src={video.snippet.thumbnails.default.url} />
        <List.Content>
          <List.Header>{video.snippet.title}</List.Header>
        </List.Content>
      </List.Item>
    </List>
  );

  render = () => (
    <React.Fragment>
      {this.props.loading && (
        <Dimmer active>
          <Loader size="medium">Carregando...</Loader>
        </Dimmer>
      )}
      {!this.props.loading && (
        <div className="video-list">
          {this.props.videos.map(video => this.renderVideo(video))}
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  videos: state.find.videos,
  loading: state.find.loading,
  error: state.find.error
});

export default connect(
  mapStateToProps,
  null
)(VideoList);
