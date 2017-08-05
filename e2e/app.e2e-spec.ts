import { FacebookPage } from './app.po';

describe('facebook App', () => {
  let page: FacebookPage;

  beforeEach(() => {
    page = new FacebookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
