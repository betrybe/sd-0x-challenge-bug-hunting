import React from 'react';
import { render, screen, fireEvent, getByRole, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchResult from '../components/content/SearchResult/index';
import App from '../App';
import mockSearchVideo from '../__mocks__/mockSearchVideo';
import mockGetVideoInfo from '../__mocks__/mockGetVideoInfo';
import mockGetVideoComments from '../__mocks__/mockGetVideoComments';
import * as api from '../api/service'

jest.mock('react-router-dom', () => {
  const moduloOriginal = jest.requireActual('react-router-dom');
  return {
    ...moduloOriginal,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
  };
})

jest.mock('../api/service');
api.searchVideos.mockImplementation(
  () => Promise.resolve(mockSearchVideo)
);
api.getVideoInfo.mockImplementation(
  () => Promise.resolve(mockGetVideoInfo)
);
api.getVideoComments.mockImplementation(
  () => Promise.resolve(mockGetVideoComments)
);

function renderWithRouter(ui, routeConfigs = {}) {
  const route = routeConfigs.route || '/';
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Search Result', () => {
  it('renders list of videos', async () => {
    renderWithRouter(<SearchResult match={{ params: { searchParam: 'bugs' } }} />)

    await waitFor(() => expect(api.searchVideos).toHaveBeenCalled())
    expect(screen.getAllByRole('link').length).toEqual(mockSearchVideo.items.length)
  })

  it('click on video redirects to video page', async () => {
    const { history } = renderWithRouter(<SearchResult match={{ params: { searchParam: 'bugs' } }} />)
    await waitFor(() => expect(api.searchVideos).toHaveBeenCalled())
    fireEvent.click(screen.getAllByRole('link')[1]) // bug 1 nao tem video id é channel

    // await waitFor(() => expect(api.getVideoInfo).toHaveBeenCalled())
    // await waitFor(() => expect(api.mockGetVideoComments).toHaveBeenCalled())
    // screen.debug()
    console.log(history)
  })


})