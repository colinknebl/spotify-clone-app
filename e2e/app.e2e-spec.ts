import { SpotifyCloneAppPage } from './app.po';

describe('spotify-clone-app App', () => {
  let page: SpotifyCloneAppPage;

  beforeEach(() => {
    page = new SpotifyCloneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
