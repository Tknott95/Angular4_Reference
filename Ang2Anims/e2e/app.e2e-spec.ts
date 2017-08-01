import { AnimateMePage } from './app.po';

describe('animate-me App', function() {
  let page: AnimateMePage;

  beforeEach(() => {
    page = new AnimateMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
