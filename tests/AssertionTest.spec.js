import {test,expect} from "@playwright/test";

test('AssertionPractice',async({page})=>
{
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    await page.locator('#shub39').fill('rajib.lama@demo.com');
    
    const garryWhileCheckBox =await page.locator("//a[text()='Garry.White']//parent::td//parent::tr//input");
    //Check the check box
    await garryWhileCheckBox.click();
    //Verify checkbox is checked or not
    await expect(garryWhileCheckBox).toBeChecked();

    const garryText=await page.locator("//a[text()='Garry.White']");
    console.log('Text =',await garryText.textContent());
    
    //Verify test Assertion full match text
    await expect(garryText).toHaveText('Garry.White');

    const userTableText=await page.locator("//h3[normalize-space()='Users Table']");

    console.log(await userTableText.textContent());
    //Verify text contains assertion
    await expect(userTableText).toContainText('Users');

    const buttonName=await page.locator("//button[text()='Submit']");

    //Verify button element have value=submit attribute
    await expect(buttonName).toHaveAttribute('value','Submit');

    //Verify enter value is matched or not using toHaveValue assertion

    
    //await enterEmailTextBox.fill('rajib.lama@gmail.com');
    //console.log(await enterEmailTextBox.textContent());
    //await expect(enterEmailTextBox).toHaveValue('rajib.lama@gmail.com');

    await page.waitForTimeout(5000);
})