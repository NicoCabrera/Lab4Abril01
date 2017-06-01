import { Lab4Abril01Page } from './app.po';

describe('lab4-abril01 App', () => {
  let page: Lab4Abril01Page;

  beforeEach(() => {
    page = new Lab4Abril01Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
