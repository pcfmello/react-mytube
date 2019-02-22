import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { findVideo } from "../store/actions/find-video";

class SearchBar extends Component {
  find = event => {
    if (event.keyCode === 13) {
      const term = event.target.value;
      console.log(term);
      this.props.findVideo(term);
    }
  };

  render = () => (
    <div className="search-bar">
      <Segment stacked>
        <Input
          icon="search"
          size="large"
          placeholder="Search..."
          onKeyDown={this.find}
        />
      </Segment>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  findVideo: q => dispatch(findVideo(q))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
