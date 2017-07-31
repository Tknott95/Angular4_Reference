import { HikefolioPage } from './app.po';

describe('hikefolio App', () => {
  let page: HikefolioPage;

  beforeEach(() => {
    page = new HikefolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tk!!');
  });
});
