<<<<<<< HEAD
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
=======
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
>>>>>>> 3f30e74402537c2d2601126f5ca7607846da96e8

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
