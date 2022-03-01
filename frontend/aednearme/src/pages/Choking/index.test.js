import { render, fireEvent, screen, cleanup, within } from '@testing-library/react';
import { MemoryRouter, Router as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history'
import {default as Choking} from './Choking';
import axios from 'axios'


describe('Choking', () => {

  // beforeEach(() => {
  //   render(<App />, { wrapper: MemoryRouter })
  // });



  // Rendering

  it('renders welcome message', () => {
    render(<Choking />, { wrapper: MemoryRouter })
    expect(screen.getByText('Choking')).toBeInTheDocument();
  });

  test('list contains 1 buttons', () => {
    render(<Choking />, { wrapper: MemoryRouter });
  
    // const listElement = screen.getAllByRole('button');
    const listItems = screen.getAllByRole('button');
  
    
    expect(listItems.length).toEqual(1);
  });



  // Snapshot

  it('should take a snapshot', () => {
    render(<Choking />, { wrapper: MemoryRouter })
    const { asFragment } = render(<Choking />, { wrapper: MemoryRouter })
    
    expect(asFragment(<Choking />)).toMatchSnapshot()
  })

  

  
})

