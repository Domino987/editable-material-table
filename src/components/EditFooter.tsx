import { Button, makeStyles, Toolbar } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
  },
  saveButton: {
    marginLeft: 'auto',
  },
});

function EditFooter() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.flexContainer}>
      <Button type="submit" variant="contained" className={classes.saveButton}>
        Save
      </Button>
    </Toolbar>
  );
}

export { EditFooter };
