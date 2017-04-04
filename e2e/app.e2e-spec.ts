import { BeelineAppPage } from './app.po';

describe('beeline-app App', () => {
  let page: BeelineAppPage;

  beforeEach(() => {
    page = new BeelineAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
