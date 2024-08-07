const {test,expect} = require('@playwright/test')

import { contactUsForm } from '../pomPages/contactUs'

const formData = {
    firstName: 'Priya',
    lastName: 'kale',
    email: 'priya123@gmail.com',
    message: 'Have a good day!!!'
}

test.describe('ContactUs form with submit and reset button',()=>{
   //let contactUs

    test.beforeEach(async({page})=>{
        const contactUs = new contactUsForm(page);
        await contactUs.navigateUrl()
    })

    test('fill the contactUs details with submit button',async({page})=>{
        const contactUs = new contactUsForm(page); // creating object
    
        //await contactUs.navigateUrl()
        await contactUs.contactDetails(formData.firstName,formData.lastName,formData.email,formData.message)
        await contactUs.submit()
        //await page.waitForTimeout(5000)
        //await page.waitForSelector('h1')
        //assertions
        //await expect(page.getByText('Thank You for your Message!')).toBeVisible()
        await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
        await page.waitForTimeout(3000)
        
    })
    
    
    test('fill the contactUs details with reset button',async({page})=>{
        const contactUs = new contactUsForm(page); // creating object
    
        //await contactUs.navigateUrl()
        await contactUs.contactDetails(formData.firstName,formData.lastName,formData.email,formData.message)
        await contactUs.reset()
        await page.waitForTimeout(5000)
        
        //assertions for reset (toBeEmpty())
        await expect(page.locator(contactUs.firstName)).toBeEmpty()
        await expect(page.locator(contactUs.lastName)).toBeEmpty()
        await expect(page.locator(contactUs.email)).toBeEmpty()
        await expect(page.locator(contactUs.comment)).toBeEmpty()
       
        
    })
})

