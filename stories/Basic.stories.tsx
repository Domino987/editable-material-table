import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EditableTable, IData, IProps } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: EditableTable,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IProps<IData>> = args => <EditableTable {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({}) as any;

Default.args = {
  data: [{ name: 'Dominik', year: 1994, city: 'berlin' }],
  columns: [
    { key: 'name', title: 'Name' },
    { key: 'year', title: 'Birthyear', type: 'number' },
    {
      key: 'city',
      title: 'City',
      lookup: { berlin: 'Berlin', paris: 'Paris' },
    },
  ],
  onSubmit: console.log,
  title: 'My Table',
};
