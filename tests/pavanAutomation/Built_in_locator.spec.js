/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute 
                                      (other attributes can be configured).
*/

const { test, expect } = require('@playwright/test')

test('Built in locators', async ({ page }) => {

    // visit the URL

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    //page.getByPlaceholder() to locate an input by placeholder.

    await page.getByPlaceholder('Username').fill('Admin') // value of placeholder
    await page.getByPlaceholder('Password').fill('admin123') // value of placeholder


    //page.getByRole() to locate by explicit and implicit accessibility attributes.

    await page.getByRole('button', { type: 'submit' }).click()

    //page.getByText() to locate by text content.

    await expect(await page.getByText('manda user')).toBeVisible()


    //page.getByLabel() to locate a form control by associated label's text

    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').fill('admin123');



    //page.getByTitle() to locate an element by its title attribute.

    await expect(page.getByTitle('OrangeHRM')).toHaveText('OrangeHRM');


    //page.getByTestId() to locate an element based on its data-testid attribute 
    // (other attributes can be configured).
    await page.getByTestId('directions').click(); //<button data-testid="directions">Itinéraire</button>





})