import { Ng2PortfolioPage } from './app.po';

describe('ng2-portfolio App', function() {
  let page: Ng2PortfolioPage;

  beforeEach(() => {
    page = new Ng2PortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My portfolio!');
  });
});
