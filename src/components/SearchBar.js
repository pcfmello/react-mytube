import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { searchVideo } from "../store/actions/find-video";

const styles = {
  textField: {
    width: "100%"
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "black !important"
    }
  },
  cssFocused: {},
  notchedOutline: {}
};
class SearchBar extends Component {
  constructor(props) {
    super(props);
    props.searchVideo("pcfmello");
  }

  search = event => {
    const isEnterPressEvent = event.keyCode === 13;
    const isMouseClickEvent = !event.keyCode;
    if (isMouseClickEvent || isEnterPressEvent) {
      const query = event.target.value;
      this.props.searchVideo(query);
    }
  };

  render = () => {
    const { classes } = this.props;
    return (
      <TextField
        margin="normal"
        variant="outlined"
        placeholder="O que deseja assistir?"
        onKeyDown={this.search}
        className={classes.textField}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={this.search}>
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  };
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchVideo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  searchVideo: query => dispatch(searchVideo(query))
});

const enhance = compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
);

export default enhance(SearchBar);
