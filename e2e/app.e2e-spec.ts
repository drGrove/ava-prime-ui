import { AvaPrimeUiPage } from './app.po';

describe('ava-prime-ui App', () => {
  let page: AvaPrimeUiPage;

  beforeEach(() => {
    page = new AvaPrimeUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
