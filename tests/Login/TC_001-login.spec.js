const {test,expect} = require('@playwright/test')


test('01-verify the login functionality with valid credentials',async({page})=>{
    
    //step-1: Navigate the website

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // step-2 Fill the userName

    await page.locator('input[name="username"]').fill('Admin')

    // step-3 Fill the passWord

    await page.locator('input[name="password"]').fill('admin123')

    // step-4 click on the login btn

    await page.locator('button[type="submit"]').click()

    // Validation

    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test('02-verify the login functionality with Invalid credentials',async({page})=>{
    
    //step-1: Navigate the website

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // step-2 Fill the userName

    await page.locator('input[name="username"]').fill('Adm')

    // step-3 Fill the passWord

    await page.locator('input[name="password"]').fill('admn123')

    // step-4 click on the login btn

    await page.locator('button[type="submit"]').click()
    
    //validation
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
})