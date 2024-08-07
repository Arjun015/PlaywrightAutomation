// const {tests , expect} = require('@playwright/test')

import {test,expect} from '@playwright/test'

test('verify the functionality of login-2',async({page})=>{


    // visit the url
    await page.goto('https://www.demoblaze.com/index.html')

    // fill the userName
    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')


    // fill the passWord
    //await page.locator('#loginpassword').fill('test@123')
    await page.fill('#loginpassword','test@123')
    //await page.type('#loginpassword','test@123')

    // login button
    await page.click("//button[@onclick='logIn()']")   // by uisng xpath

    // verify the logout link presence 
    await expect(page.locator('#logout2')).toBeVisible()

    await page.close()

})


