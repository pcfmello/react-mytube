import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { findVideo } from "../store/actions/find-video";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center"
  },
  searchInput: {
    width: "70%"
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    props.findVideo("pcfmello");
  }

  find = event => {
    if (event.keyCode === 13) {
      const term = event.target.value;
      console.log(term);
      this.props.findVideo(term);
    }
  };

  render = () => {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          margin="normal"
          variant="outlined"
          placeholder="O que deseja assistir?"
          onKeyDown={this.find}
          className={classes.searchInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            )
          }}
        />
      </div>
    );
  };
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  findVideo: q => dispatch(findVideo(q))
});

const enhance = compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
);

export default enhance(SearchBar);
