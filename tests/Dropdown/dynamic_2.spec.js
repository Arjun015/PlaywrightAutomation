const {test,expect} = require('@playwright/test')

test('verify the dynamic dropdown in Playwright',async({page})=>{

    await page.goto('https://www.redbus.in/')

    //From
    await page.locator('#src').fill('Nashik')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    const fromCityOptions = await (await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]"))
    //console.log(fromCityOptions)
    for(let option of fromCityOptions){
         let value = await option.textContent()
         //console.log(value)
         if(value === 'Dwarka Circle'){
            await option.click()
            break
         }
    }
    expect(await page.locator('.placeHolderMainText').first()).toHaveText('Dwarka Circle')
    await page.waitForTimeout(5000)
    //To
    await page.locator('#dest').fill('mumbai')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    const ToCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    for(let optionTo of ToCityOptions){
        let valueTo = await optionTo.textContent()
        console.log(valueTo)

        if(valueTo === 'Andheri East'){
            await optionTo.click()
            break
        }
        
   }
//     expect(await page.locator('.placeHolderMainText').first()).toHaveText('Andheri East')
//    await page.waitForTimeout(5000)

})