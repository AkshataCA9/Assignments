import { test } from "@playwright/test";
import { setTimeout } from "timers/promises";

test(`Test to create a lead`, async ({page}) => {

    //Navigate to the URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter username
    await page.locator("#username").fill("Demosalesmanager");

    //Enter password
    await page.locator("#password").fill("crmsfa");

    //Click on Login button
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA (legacy text)
    await page.locator("text=CRM/SFA").click();
    //await page.locator("//a[contains(text(),'CRM/SFA')]").click();

    //Click on create lead
    await page.locator("//a[contains(text(),'Create Lead')]").click();

    //Enter the companyName
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("Test");

    //Enter firstName
    const firstName = page.locator("#createLeadForm_firstName");
    await firstName.fill("Akshata");

    //Enter lastName
    const lastName = page.locator("#createLeadForm_lastName");
    await lastName.fill("A");

    //Enter the salutation
    await page.locator("#createLeadForm_personalTitle").fill("Mrs");

    //Enter the Title
    await page.locator("#createLeadForm_generalProfTitle").fill("TestLead");

    //Enter the Anuual Revenue
    await page.locator("#createLeadForm_annualRevenue").fill("15000");

    //Enetr department
    await page.locator("#createLeadForm_departmentName").fill("IT");

    //Enter phoneNumber
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("8618527198");

    //Click on Submit button
    await page.locator(".smallSubmit").click();

    // Get the values for the fields
    console.log(`The companyName is ${await (page.locator("#viewLead_companyName_sp")).innerText()}`);
    
    console.log(`The firstName is ${await (page.locator("#viewLead_firstName_sp")).innerText()}`);

    console.log(`The lastName is ${await (page.locator("#viewLead_lastName_sp")).innerText()}`);

    console.log(`The status of the lead is ${await (page.locator("#viewLead_statusId_sp")).innerText()}`);
    
    //Get the title of the page
    await page.waitForTimeout(10000);
    console.log(`The page title is ${await page.title()}`);
    
    
    
})