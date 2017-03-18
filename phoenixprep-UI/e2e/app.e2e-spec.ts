import { PhoenixprepUIPage } from './app.po';

describe('phoenixprep-ui App', function() {
  let page: PhoenixprepUIPage;

  beforeEach(() => {
    page = new PhoenixprepUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
