import { ModularClientNg2Page } from './app.po';

describe('modular-client-ng2 App', function() {
  let page: ModularClientNg2Page;

  beforeEach(() => {
    page = new ModularClientNg2Page();
  });

  it('should display message saying client works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('client works!');
  });
});
