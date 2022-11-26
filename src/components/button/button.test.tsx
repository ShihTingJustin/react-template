import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Test Button component', () => {
  const component = (
    <Button onClick={() => {}}>
     <div>button text</div>
    </Button>
  );

  it('[Render] match snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('[Render] toBeInTheDocument', () => {
    render(component);
    const element = screen.getByTestId('button');
    expect(element).toBeInTheDocument();
  });
});
