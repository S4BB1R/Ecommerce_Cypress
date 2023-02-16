import { expect } from "chai";
import testCase2LoginUserPage from "../../pageObject/testCase2LoginPageObject";

describe("Test Case 2: Login User",()=>
{
    it("Visit url 'http://automationexercise.com'",() =>{

      cy.visit('/');
      cy.url().should('contain', 'automationexercise');

    });

    it("verify web page is visible",()=>{
        cy.request("baseUrl").should(
            (response) => {
                expect(response.status).eq(200);
            }
        );

        cy.csrfCookies();
        // will add navbar validation 
    })

    it("click on signup button",()=>{
        const signupbtn=testCase2LoginUserPage.getSignupLoginButton()
        if(signupbtn.should("be.visible"))
        {
            signupbtn.click()
        }
        else{
            cy.visit("/")
        }
       // cy.get(".shop-menu > .nav > :nth-child(4) > a").click()
    })

    
})