export class ModularClientNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('client-root h1')).getText();
  }
}
