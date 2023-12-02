import { Selector } from 'testcafe';
class ReportDebrisPage {
  constructor() {
    this.pageId = '#reportDebris-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async submit(testController, text) {
    await this.isDisplayed(testController);
    await testController.click('#debris-sf1-dropdown');
    await testController.typeText('#debris-sf1-dropdown-other', text);
    await testController.click('#debris-sf2-dropdown');
    await testController.typeText('#debris-sf2-dropdown-other', text);
    await testController.click('#debris-sf3-dropdown');
    await testController.typeText('#debris-sf3-dropdown-other', text);

    await testController.click('#debris-submit');
  }
}

export const reportDebrisPage = new ReportDebrisPage();
