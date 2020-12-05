import { TableBody } from '@material-ui/core';
import { useField } from 'formik';
import * as React from 'react';
import { IData, IEditBodyProps } from '../types/props';
import { EditTableRow } from './EditTableRow';

function EditTableBody<T extends IData>({ columns }: IEditBodyProps<T>) {
  const [{ value: data }] = useField<T[]>('data');
  return (
    <TableBody>
      {data.map((_, index) => (
        <EditTableRow key={index} index={index} columns={columns} />
      ))}
    </TableBody>
  );
}

export { EditTableBody };
