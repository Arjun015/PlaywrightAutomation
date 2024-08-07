const { test, expect } = require('@playwright/test')

test('TC_001-Verify the Dynyamic Dropdown', async ({ page }) => {

    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Nashik')
    await page.waitForSelector('.placeHolderMainText')
    const optionCounts = await page.locator('.placeHolderMainText').count()
    console.log(optionCounts)
    for (let i = 0; i < optionCounts; i++) {
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(text)
        if (text === 'Ashok Pillar') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
        // await page.locator('#dest').fill('mumbai')
        // await page.waitForSelector('.placeHolderMainText')
        // let optionCountsTo = await page.locator('.placeHolderMainText').count()
        // console.log(optionCountsTo)

        // for (let i = 0; i < optionCountsTo; i++) {
        //     let textTo = await page.locator('.placeHolderMainText').nth(i).textContent()
        //     console.log(textTo)
        //     if (textTo === 'Borivali West') {
        //         await page.locator('.placeHolderMainText').nth(i).click()
        //         break
        //     }
        }

        await page.locator('#dest').fill('mumbai')
        await page.waitForSelector('.placeHolderMainText')
        let optionCountsTo = await page.locator('.placeHolderMainText').count()
        console.log(optionCountsTo)

        for (let i = 0; i < optionCountsTo; i++) {
            let textTo = await page.locator('.placeHolderMainText').nth(i).textContent()
            console.log(textTo)
            if (textTo === 'Borivali West') {
                await page.locator('.placeHolderMainText').nth(i).click()
                break
            }
        }
        
})
