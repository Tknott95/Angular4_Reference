import { FirebaseAuthPage } from './app.po';

describe('firebase-auth App', () => {
  let page: FirebaseAuthPage;

  beforeEach(() => {
    page = new FirebaseAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
