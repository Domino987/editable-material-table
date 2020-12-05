import { Paper, Table, TableContainer } from '@material-ui/core';
import { FieldArray, Form, Formik } from 'formik';
import * as React from 'react';
import { IData, IProps } from '../types/props';
import { EditFooter } from './EditFooter';
import { EditTableBody } from './EditTableBody';
import { EditTableHead } from './EditTableHead';
import { EditToolbar } from './EditToolbar';
import * as Yup from 'yup';

function EditableTable<T extends IData>({
  data,
  columns,
  title,
  validationSchema,
  onSubmit,
}: IProps<T>) {
  return (
    <Formik
      initialValues={
        { data, checkedRows: [] } as { data: T[]; checkedRows: boolean[] }
      }
      validationSchema={Yup.object().shape({
        data: validationSchema || Yup.array(),
      })}
      onSubmit={values => onSubmit(values.data)}
    >
      <Form>
        <FieldArray
          name="data"
          render={() => (
            <Paper>
              <EditToolbar title={title} />
              <TableContainer>
                <Table>
                  <EditTableHead columns={columns} />
                  <EditTableBody columns={columns} />
                </Table>
              </TableContainer>
              <EditFooter />
            </Paper>
          )}
        />
      </Form>
    </Formik>
  );
}

export { EditableTable };
