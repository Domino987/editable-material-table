import { TableRow, Checkbox, TableCell, TableHead } from '@material-ui/core';
import { useField } from 'formik';
import * as React from 'react';
import { IData, IEditHeaderProps } from '../types/props';

function EditTableHead<T extends IData>({ columns }: IEditHeaderProps<T>) {
  const [{ value: data }] = useField<object[]>('data');
  const [{ value: checkedRows }, , { setValue: setCheckValues }] = useField<
    boolean[]
  >('checkedRows');
  const unCheckedRows = checkedRows.filter(Boolean);
  return (
    <TableHead>
      <TableRow>
        <TableCell width="5%">
          <Checkbox
            checked={data.length > 0 && unCheckedRows.length === data.length}
            onChange={() => {
              setCheckValues(
                unCheckedRows.length < data.length
                  ? Array(data.length).fill(true)
                  : []
              );
            }}
          />
        </TableCell>
        {columns.map((column, index) => (
          <TableCell key={index}>{column.title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export { EditTableHead };
