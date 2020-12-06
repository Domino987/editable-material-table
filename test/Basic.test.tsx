import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Default as Basic } from '../stories/Basic.stories';

describe('Basic', () => {
  it('renders without crashing', () => {
    render(<Basic {...Basic.args} />);
  });
  it('renders the textfields', () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByText('My Table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Birthyear')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Dominik')).toBeInTheDocument();
    expect(screen.getByDisplayValue('1994')).toBeInTheDocument();
    expect(screen.getByText('Berlin')).toBeInTheDocument();
  });
});
