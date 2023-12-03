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

  async selectDropdownAndTypeOther(testController, dropdownId, textFieldId, text, option = 'Other') {
    const optionWithText = Selector(dropdownId).find('option').withText(option);

    await testController
      .click(dropdownId)
      .click(optionWithText)
      .typeText(textFieldId, text);
  }

  async submit(testController, text) {
    await this.isDisplayed(testController);

    // For the first dropdown and text field:
    await this.selectDropdownAndTypeOther(testController, '#debris-sf1-dropdown', '#debris-sf1-dropdown-other', text);

    // For the second dropdown and text field, choosing a different option:
    // await this.selectDropdownAndTypeOther(testController, '#debris-sf2-dropdown', '#debris-sf2-dropdown-other', text, 'In the shore break');

    // For the third dropdown and text field, choosing a different option:
    // await this.selectDropdownAndTypeOther(testController, '#debris-sf3-dropdown', '#debris-sf3-dropdown-other', text, 'loose on the shore but caught in the vegetation line');

    await testController.click('#debris-submit');
  }
}

export const reportDebrisPage = new ReportDebrisPage();
