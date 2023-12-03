import { landingPage } from './landing.page';
import { landingOrganizationPage } from './landingOrganization.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { reportDebrisPage } from './reportDebris.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials1 = { email: 'john@foo.com', password: 'changeme' };
const credentials2 = { email: 'org@foo.com', password: 'changeme' };
// const credentials3 = { email: 'admin@foo.com', password: 'changeme' };

fixture('repport localhost test with default db')
  .page('http://localhost:3000');

test('Test that Landing.jsx shows up.', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that SignIn.jsx and SignOut.jsx work.', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials1.email, credentials1.password);
  await navBar.isLoggedIn(testController, credentials1.email);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that LandingOrganization.jsx shows up.', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials2.email, credentials2.password);
  await navBar.isLoggedIn(testController, credentials2.email);
  await landingOrganizationPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test report debris', async (testController) => {
  // eslint-disable-next-line no-console
  console.log('running debris report test');
  await navBar.gotoReportDebrisPage(testController);
  await reportDebrisPage.submit(testController, 'test');
});
