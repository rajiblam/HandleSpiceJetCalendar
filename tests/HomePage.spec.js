import { test, expect } from '@playwright/test';

test('VerifyTitle',async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const pageTitle=await page.title();
    console.log('Page Title is - ',pageTitle)
    const pageUrl=await page.url();
    console.log('Page URL is - ',pageUrl)

    await expect(page).toHaveTitle('OrangeHRM');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.locator("//span[@class='oxd-userdropdown-tab']//i").click();
    await page.locator("//a[text()='Logout']").click();
    

    await page.waitForTimeout(5000)

    await page.close(); 
})