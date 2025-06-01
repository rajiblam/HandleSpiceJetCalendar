const {test,expect}=require('@playwright/test');

test('HandleInputBox',async({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const enterName=await page.locator('#name');

    //Verify text box empty, editable, enable and visible
    await expect(enterName).toBeVisible();
    await expect(enterName).toBeEmpty();
    await expect(enterName).toBeEditable();
    await expect(enterName).toBeEnabled();

    await enterName.fill('Rajib Lama');
    //const fullName=await enterName.inputValue();
    console.log('Full name : ',await enterName.inputValue());
    //Assertion for same enter value is matching 
    await expect.soft(enterName).toHaveValue('Rajib Lama');

    await page.fill('#email','rajib.lama@gmail.com');
    await page.fill('#phone','12345677');
    await page.fill('#textarea','This is JS Playwright Automation');
    const radioButtonMale=await page.locator('#male');
    await radioButtonMale.check();
    //Assertion for radio button to be checked
    //await expect.soft(radioButton).toBeChecked();
    await expect.soft(radioButtonMale.isChecked()).toBeTruthy();

    const radioButtonFemale=await page.locator('#female');
    //await expect.soft(radioButtonFemale.isChecked()).toBeFalsy();
    await expect(radioButtonFemale).not.toBeChecked();
    const checkBoxMonday=await page.locator('#monday');
    //Asssertion for check bo not to be checked
    await expect.soft(checkBoxMonday).not.toBeChecked();
    //await expect.soft(checkBoxMonday.is).toBeFalsy();
    await checkBoxMonday.click();
    //Aseertion check box to be checked.
    await expect.soft(checkBoxMonday).toBeChecked();

    await page.selectOption('#country','India');

    await page.waitForTimeout(5000);
    await page.close();
})