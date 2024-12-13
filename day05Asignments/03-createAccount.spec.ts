import { test } from "@playwright/test";
import { log } from "node:console";

test(`Test to create new salesforce account`, async ({page}) => {
    
    //navigate to the URL
    await page.goto("https://login.salesforce.com/");

    //Enter username
    await page.getByLabel("Username").fill("akshataca9@gmail.com");

    //Enter password
    await page.getByLabel("Password").fill("NewSalesforce@123");

    //Click on Login button
    await page.locator("#Login").click();

    //Print the title
    console.log(`The title of the page is ${await page.title()}`);

    //Print the URL
    console.log((`The URL of the page is ${page.url()}`));

    //Click on the App Launcher
    await page.locator(".slds-icon-waffle").click();

    //Click on View All
    await page.getByText("View All").click();

    //Search for Service
    await page.getByPlaceholder("Search apps or items...").fill("Service");

    //Click on Service
    await page.waitForTimeout(10000);
    await page.locator("(//mark[text()='Service'])[1]").click();

    //Click on Accounts
    await page.locator(`text="Accounts"`).click();

    //click on New 
    await page.getByRole('button',{name:"new"}).click();

    //Enter the Account name
    await page.locator(`[name="Name"]`).fill("Akshata");

    //Click on Save button
    await page.locator("//button[@name='SaveEdit']").click();
    
    // //Verify the toast message
    // await page.waitForTimeout(10000);
    // console.log(`The message is ${page.locator("..forceVisualMessageQueue").innerText()}`);
    
})

