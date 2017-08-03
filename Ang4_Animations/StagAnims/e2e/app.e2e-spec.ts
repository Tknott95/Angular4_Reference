import { StagAnimsPage } from './app.po';

describe('stag-anims App', () => {
  let page: StagAnimsPage;

  beforeEach(() => {
    page = new StagAnimsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tk!!');
  });
});
