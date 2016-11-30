import { BuildAngularComponentsPage } from './app.po';

describe('build-angular-components App', function() {
  let page: BuildAngularComponentsPage;

  beforeEach(() => {
    page = new BuildAngularComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
