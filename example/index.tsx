import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { EditableTable, IColumn } from '../.';

const data = [
  {
    surname: 'Dominik',
    name: 'Engel',
    city: 'aachen',
  },
];

const columns: IColumn<typeof data[0]>[] = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Surname',
    key: 'surname',
  },
  {
    title: 'City',
    key: 'city',
    lookup: { aachen: 'Aachen', berlin: 'Berlin', paris: 'Paris' },
  },
];

const validationSchema = Yup.array()
  .required()
  .of(
    Yup.object({
      name: Yup.string().required('A name must be supplied'),
      surname: Yup.string().required('A surname must be supplied'),
      city: Yup.string().required('Select a city'),
    })
  );

const App = () => {
  return (
    <div>
      <EditableTable
        data={data}
        columns={columns}
        title="My Edit Table"
        validationSchema={validationSchema}
        onSubmit={console.log}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
