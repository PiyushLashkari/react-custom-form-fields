import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from "@material-ui/core/Input";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  margin: {
    margin: 0,
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#FF5F00',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#FF5F00',
    },
  }
});

const CustomInputTextMaterial = (props) => {
  const { component } = props;
  let properties = props.component || {};
  const { classes } = props;
  return (
    <Grid container spacing={0}>
        <Grid item xs={1}>
          <FormControl className={classes.margin}>
            <InputLabel
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor={component.id}
            >
              {component.label}
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              name={component.name}
              id={component.id}
              placeholder={component.placeholder}
            />
          </FormControl>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CustomInputTextMaterial);
