import { TableRow, Checkbox, TableCell, MenuItem } from '@material-ui/core';
import { useFieldValue } from 'formik';
import * as React from 'react';
import { IData, IEditRowProps } from '../types/props';
import { FastFormikTextField } from './FastFormikTextField';

function ETableRow<T extends IData>({ index, columns }: IEditRowProps<T>) {
  const [checked, setChecked] = useFieldValue<boolean>(`checkedRows.${index}`);
  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={checked ?? false}
          onChange={(_, isChecked) => {
            setChecked(isChecked);
          }}
        />
      </TableCell>
      {columns.map(column => (
        <TableCell key={column.key}>
          <FastFormikTextField
            select={column.lookup !== undefined}
            required={column.required}
            name={`data.${index}.${column.key}`}
            fullWidth={true}
            type={column.type}
          >
            {column.lookup
              ? Object.entries(column.lookup).map(([key, value]) => (
                  <MenuItem key={key} value={key}>
                    {value}
                  </MenuItem>
                ))
              : null}
          </FastFormikTextField>
        </TableCell>
      ))}
    </TableRow>
  );
}

const MemoRow: typeof ETableRow = React.memo(ETableRow) as any;

export { MemoRow as EditTableRow };
