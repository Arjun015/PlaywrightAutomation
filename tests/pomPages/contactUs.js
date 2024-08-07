export class contactUsForm {
         constructor(page){
            this.page = page,
            this.firstName = 'input[name="first_name"]',
            this.lastName = 'input[name="last_name"]',
            this.email = 'input[name="email"]',
            this.comment = 'textarea[name="message"]',
            this.submitBtn = 'input[type="submit"]' ,
            this.resetBtn ='input[type="reset"]'

         }

         async navigateUrl(){
            await this.page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        }

         async contactDetails(fn,ln,em,comnt){
            await this.page.fill(this.firstName,fn)
            await this.page.fill(this.lastName,ln)
            await this.page.fill(this.email,em)
            await this.page.fill(this.comment,comnt)
        }

        async submit(){
            await this.page.click(this.submitBtn)
        }

        async reset(){
            await this.page.click(this.resetBtn)
        }
  }


// export class ContactUs {
//     weblocators = {

//         firstName : 'input[name="first_name"]',
//         lastName :'input[name="last_name"]',
//         email : 'input[name="email"]',
//         comment : 'input[name="message"]',
//         submit : 'input[type="submit"]' ,
//         reset :'input[type="reset"]'
//     }


//     Contactus_form(fn,ln,email,mesg){
//         cy.get(this.weblocators.firstName).type(fn)
//         cy.get(this.weblocators.lastName).type(ln)
//         cy.get(this.weblocators.email).type(email)
//         cy.get(this.weblocators.comment).type(mesg)
//     }
    
//     submit() { 
//         cy.get(this.weblocators.submit).click()
//     }
    
//     reset (){
//         cy.get(this.weblocators).click()
//     }
// }

// ///<reference types="cypress"/>

// import {RegisterPage} from "../../PagesSelectors/regesterPage"

// import registerData from "../../../fixtures/registerData.json"

// const registrOBJ = new RegisterPage()

// //const email = `arjun${Math.floor(Math.random() * 10000) + 1}@15ce.com`;

// describe('verify the register page ',function(){

    
    

//     it('verify the register',function(){
//         //const email = `admin${Math.floor(Math.random() * 10000) + 1}@15ce.com`;
       
//         registrOBJ.openUrl()
//         registrOBJ.enterFirstName(registerData.firstName)
//         registrOBJ.enterLastName(registerData.lastName)
//         registrOBJ.enterEmail(registerData.email)
//         registrOBJ.enterTelephone(registerData.telephone)
//         registrOBJ.enterPassword(registerData.password)
//         registrOBJ.enterConfirmPassword(registerData.confirmPassword)
//         registrOBJ.clickPolicyCheckBox()
//         registrOBJ.contineuButton()




//     })
// })