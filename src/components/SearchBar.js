import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { findVideo } from "../store/actions/find-video";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    props.findVideo("pcfmello");
  }

  find = event => {
    if (event.keyCode === 13) {
      const query = event.target.value;
      this.props.findVideo(query);
    }
  };

  render = () => {
    return (
      <TextField
        margin="normal"
        variant="outlined"
        placeholder="O que deseja assistir?"
        onKeyDown={this.find}
        style={{ width: "100%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          )
        }}
      />
    );
  };
}

const mapDispatchToProps = dispatch => ({
  findVideo: query => dispatch(findVideo(query))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
