import { DyFormsPage } from './app.po';

describe('dy-forms App', () => {
  let page: DyFormsPage;

  beforeEach(() => {
    page = new DyFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
