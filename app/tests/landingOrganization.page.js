import { Selector } from 'testcafe';

class LandingOrganizationPage {
  constructor() {
    this.pageId = '#landing-organization-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const landingOrganizationPage = new LandingOrganizationPage();
