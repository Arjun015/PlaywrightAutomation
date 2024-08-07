const {test,expect} = require('@playwright/test')

test('verify the conatactUs form in PlayWright',async({page})=>{

    // visit the url
    //await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.type('input[name="first_name"]','Smith')
    await page.type('input[name="last_name"]','Adam')
    await page.type('input[name="email"]','admin123@gmail.com')
    await page.type('textarea[name="message"]','I am learning Playwright')
    await page.click('[type="submit"]')
    await page.waitForTimeout(5000)
    //await page.waitForSelector(5000)
})

