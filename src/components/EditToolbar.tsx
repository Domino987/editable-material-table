import {
  Toolbar,
  IconButton,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core';
import { useField } from 'formik';
import * as React from 'react';
import { IData, IToolbarProps } from '../types/props';
import DeleteIcon from '@material-ui/icons/DeleteSharp';
import AddIcon from '@material-ui/icons/AddSharp';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 0,
  },
  flexLeft: {
    marginLeft: theme.spacing(1),
    justifySelf: 'flex-start',
  },
  flexRight: {
    justifySelf: 'flex-end',
  },
  marginLeft: {
    marginLeft: 'auto',
  },
}));

function EditToolbar({ title }: IToolbarProps) {
  const [{ value: data }, , { setValue }] = useField<IData[]>('data');
  const [{ value: checkedRows }, , { setValue: setCheckValues }] = useField<
    boolean[]
  >('checkedRows');

  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.flexContainer} variant="dense">
        <Typography variant="h6" className={classes.flexLeft}>
          {title}
        </Typography>
        <IconButton
          className={`${classes.flexRight} ${classes.marginLeft}`}
          onClick={() => {
            setValue(data.filter((_, index) => !checkedRows?.[index]));
            setCheckValues([]);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          className={classes.flexRight}
          onClick={() => {
            setValue([...data, {}]);
          }}
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
      <Divider />
    </>
  );
}

export { EditToolbar };
