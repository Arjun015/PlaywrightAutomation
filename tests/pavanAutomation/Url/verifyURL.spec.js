const {test , expect} = require('@playwright/test')

test('verify the URL of the webPage',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    expect(await page.url()).toBe('https://www.demoblaze.com/index.html')
})