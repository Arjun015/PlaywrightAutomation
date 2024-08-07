const { test,expect } = require("@playwright/test")


test('TC_001-Verify the Radio Button functionality with check method',async({page})=>{

    //visit the url
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-7-2')).not.toBeChecked()
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('vfb-7-1')).toBeChecked()

})

test('TC_002-Verify the Radio btn functionality with click method',async({page})=>{

    //visit the url
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-7-2')).not.toBeChecked()
    await page.locator('#vfb-7-1').click()
    await expect(page.locator('vfb-7-1')).toBeChecked()

})

test('TC_003-Verify the checkBox functionality with check mathod',async({page})=>{
    
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-1').check()
    await expect(page.locator('#vfb-6-1')).toBeChecked()
})

test('TC_004-Verify the checkBox functionality with click mathod',async({page})=>{
    
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-1').check()
    await expect(page.locator('#vfb-6-1')).toBeChecked()
})

