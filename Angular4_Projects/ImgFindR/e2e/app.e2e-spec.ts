import { ImgFindRPage } from './app.po';

describe('img-find-r App', () => {
  let page: ImgFindRPage;

  beforeEach(() => {
    page = new ImgFindRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tk!!');
  });
});
