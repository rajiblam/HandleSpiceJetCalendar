import { test,expect } from "@playwright/test";
//const {test,expect}=require('@playwright/test')

test('LocatorTest',async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //Verify Login Text Visible or not
    const loginText=await page.locator("//h5[text()='Login']");
    await expect(loginText).toBeVisible();

    //Verify username text box enabled or not
    const userNameTextBox=await page.getByPlaceholder('Username');
    await expect(userNameTextBox).toBeEnabled();

    //Verify password text box enabled or not
    const passwordTextBox=await page.getByPlaceholder('Password');
    await expect(passwordTextBox).toBeEnabled();

    //Verify Login button is enabled or not
    const loginButton=await page.locator("//button[text()[normalize-space() = 'Login']]");
    await expect(loginButton).toBeEnabled();

    //await userNameTextBox.fill('Admin');
    //await passwordTextBox.fill('admin123');
    await page.fill('input[name=username]','Admin');
    await page.fill('input[name=password]','admin123');
    await loginButton.click();

    //Locate Search Box
    const searchBox=await page.getByPlaceholder('Search');
    //Verify search box enabled
    await expect(searchBox).toBeEnabled();
    //Enter data claim in search Box
    await page.getByPlaceholder('Search').fill('Claim');
    //Click Claim menu after
    await page.getByText('Claim').click();
    //Click Assign Claim buton
    await page.click("//button[normalize-space()='Assign Claim']");
    //Locate Create Button 
    const createButton=await page.locator("//button[normalize-space()='Create']");
    //Verify Create Button is enabled
    await expect(createButton).toBeEnabled();

    await page.waitForTimeout(5000);

    await page.close();
})