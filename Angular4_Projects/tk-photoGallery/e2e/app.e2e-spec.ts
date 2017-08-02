import { TkPhotoGalleryPage } from './app.po';

describe('tk-photo-gallery App', () => {
  let page: TkPhotoGalleryPage;

  beforeEach(() => {
    page = new TkPhotoGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tk!!');
  });
});
