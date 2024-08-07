const { tests, expect } = require('@playwright/test')

test('multiple elemennt ', async ({ page }) => {


    // visit the url

    await page.goto('https://www.demoblaze.com/index.html')

    /*

    const links  = await page.$$(a)

    for(const link of links) {
      const linktext  =  await link.textContent()
      console.log(linktext)
    }
    */

    // capture all element text 

    const products = await page.locator("//div[@id='tbodyid']//div[1]//div[1]//div[1]//h4[1]//a[1]")

    for(const product of products){
        const productName = await product.textContent()
            console.log(productName)
    }

    // xpath = //div[@id='tbodyid']//div[1]//div[1]//div[1]//h4[1]//a[1]

})
