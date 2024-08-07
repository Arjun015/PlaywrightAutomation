const {test,expect} = require('@playwright/test')

test('TC_001-verify the simple alerts in Playwright',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async simpleAlerts=>{
        //console.log(simpleAlerts.message())
      await expect(simpleAlerts.message()).toContain('I am a JS Alert')
      await simpleAlerts.accept()
       console.log(simpleAlerts.type())
       
    })
    await page.locator('button[onclick="jsAlert()"]').click() // click on the button
    await page.waitForTimeout(5000)
})


test('TC_002- verify the the simple alert on demoblaze.com',async({page})=>{

   await page.goto('https://www.demoblaze.com/')
   await page.waitForSelector('[class="card-title"] a')
   let productCount = await page.locator('[class="card-title"] a').count()
  // console.log(productCount)
  for(let i=0 ; i<productCount ; i++){
      // find the all text
    let text = await page.locator('[class="card-title"] a').nth(i).textContent()
    console.log(text)

    // click on the 'Nexus 6'
    if(text === 'Nexus 6'){
        await page.locator('[class="card-title"] a').nth(i).click()
        break
    }
  }
  page.on('dialog',async simpleAlerts =>{
      await expect(simpleAlerts.message()).toContain('Product added')
      await simpleAlerts.accept()
      console.log(simpleAlerts.type())
  })
  await page.locator('a[onclick="addToCart(3)"]').click()
  await page.waitForTimeout(5000)

})


test('TC_003- verify the confirm alert in Playwright',async({page})=>{
     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

     page.on('dialog',async confirmAlert =>{
      expect(await confirmAlert.message()).toContain('I am a JS Confirm')
      await confirmAlert.accept() //for ok button
      expect(await confirmAlert.type()).toContain('confirm')
      //console.log(confirmAlert.message())

     })
    await page.locator('button[onclick="jsConfirm()"]').click()
    await page.waitForTimeout(5000)
    await expect(page.locator('[id="result"]')).toHaveText('You clicked: Ok')
    await page.waitForSelector('[id="result"]')
     

})

test('TC_004- verify the confirm alert in Playwright',async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  page.on('dialog',async confirmAlert =>{
   expect(await confirmAlert.message()).toContain('I am a JS Confirm')
   await confirmAlert.dismiss() //for cancel button
   await expect(prompt.type()).toContain('prompt')
   //console.log(confirmAlert.message())

  })
 await page.locator('button[onclick="jsConfirm()"]').click()
 await page.waitForTimeout(5000)
 await expect(page.locator('[id="result"]')).toHaveText('You clicked: Cancel')
 await page.waitForSelector('[id="result"]')
  

})


test.only('TC_005 verify the prompt alert in Playwright',async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  page.on('dialog',async promptAlert =>{
   expect(await promptAlert.message()).toContain('I am a JS Confirm')
   await promptAlert.accept() //for ok button
   await expect(promptAlert.type()).toContain('prompt')
   //console.log(confirmAlert.message())

  })
 await page.locator('button[onclick="jsPrompt()"]').click()
 await page.waitForTimeout(5000)
 expect(await page.locator('[id="result"]')).toHaveText('You entered: I am learning Playwright')

  

})

test('TC_006 verify the prompt alert in Playwright',async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

  page.on('dialog',async promptAlert =>{
   expect(await promptAlert.message()).toContain('I am a JS Confirm')
   await promptAlert.dismiss() //for cancel/null button
   expect(await promptAlert.type()).toContain('prompt')
   //console.log(confirmAlert.message())

  })
 await page.locator('button[onclick="jsPrompt()"]').click()
 await page.waitForTimeout(5000)
 await expect(page.locator('[id="result"]')).toHaveText('You entered: null')
 await page.waitForSelector('[id="result"]')
  

})