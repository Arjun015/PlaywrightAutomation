const {test , expect} = require('@playwright/test')

test('TC_001:verify the Title of the webPage',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    expect(await page.title()).toBe('STORE')

})

test('TC_002:verify the Title of the webPage',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/blog/index.php/2023/06/29/playwright-interview-questions/#t-1638970939486')
    expect(await page.title()).toBe('Playwright Interview Questions - Rahul Shetty Academy Blog')

})