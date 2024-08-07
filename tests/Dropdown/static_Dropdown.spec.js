const {test,expect} = require('@playwright/test')

// static dropDown


// fruits
test('TC_001-verify the selecting Fruits in the given dropDown',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.waitForSelector('[id="fruits"]')
    await page.locator('[id="fruits"]').selectOption('0')
    //await page.waitForTimeout(6000)
    expect(await page.locator('p[class="subtitle"]')).toHaveText('You have selected Apple')
})


test('TC_002-verify the selecting Fruits in the given dropDown',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.waitForSelector('[id="fruits"]')
    await page.locator('[id="fruits"]').selectOption('4')
   // await page.waitForTimeout(6000)
    expect(await page.locator('p[class="subtitle"]')).toHaveText('You have selected Pine Apple')
})

// SupreHeros
test('TC_003-verify the selecting SuperHeros in the given dropDown',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.waitForSelector('#superheros')
    await page.locator('#superheros').selectOption('sm')
   // await page.waitForTimeout(6000)
    expect(await page.locator('p[class="subtitle"]')).toHaveText('You have selected Spider-Man')
})

test('TC_004-verify the selecting SuperHeros in the given dropDown',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.waitForSelector('#superheros')
    await page.locator('#superheros').selectOption('Doctor Strange')
    await page.waitForTimeout(6000)
    expect(await page.locator('p[class="subtitle"]')).toHaveText('You have selected Doctor Strange')
})


test('TC_005-verify the selecting SuperHeros in the given dropDown',async({page})=>{

    await page.goto('https://letcode.in/dropdowns')
    await page.waitForSelector('#superheros')
    await page.locator('#superheros').selectOption('Superman')
   // await page.waitForTimeout(6000)
    expect(await page.locator('p[class="subtitle"]')).toHaveText('You have selected Superman')
})

// VegeTables

test('TC_006-verify the selecting Programming languages in the given dropDown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.waitForSelector('#lang')
    await page.locator('#lang').selectOption('Python')
   // await page.waitForTimeout(6000)
    expect(await page.locator('p[class="subtitle"]')).toHaveText('You have selected Python')


})


//country

test('TC_007-verify the selecting Country in the given dropDown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.waitForSelector('#country')
    await page.locator('#country').selectOption('Peru')
   // await page.waitForTimeout(6000)
    expect( await page.locator('#country')).toHaveValue('Peru')


})



















// // Static Dropdown
// test('TC_001-handling the Static_dropDown functiobality',async({page})=>{

    
//     await page.goto('https://letcode.in/dropdowns')
//     await page.locator('#fruits').selectOption('2')
//     await page.locator('#superheros').selectOption('ta')
//     await page.locator('#lang').selectOption('swift')
//     await page.pause()
// })


