import { default as Home } from './Home';
import App from '../../App'
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter, Router, BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history'






describe('Home Page', () => {
    let setPlayersMock;
    let handleChangeMock;

    // beforeEach(() => {
    //     // user = jest.fn();
    //     setPlayersMock = jest.fn();
    //     // render(<MemoryRouter><Home /></MemoryRouter>);
    // });

    afterEach(cleanup)

    test('it renders a heading', () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        let heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();;
    });


      // Rendering

  it('renders welcome message', () => {
    render(<Home />, { wrapper: MemoryRouter })
    expect(screen.getByText('IN A LIFE THREATENING EMERGENCY, CALL 999')).toBeInTheDocument();
  });








  // Snapshot

  it('should take a snapshot', () => {
    // render(<Home />, { wrapper: MemoryRouter })
    const { asFragment } = render(<Home />, { wrapper: MemoryRouter })
    
    expect(asFragment(<Home />)).toMatchSnapshot()
  })




});